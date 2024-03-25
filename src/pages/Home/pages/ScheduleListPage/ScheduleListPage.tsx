import ScheduleListPageHeader from "components/ScheduleList/ScheduleListPageHeader";
import useHome from "@hooks/useHome.ts";
import moment from "moment";
import { Box, Stack } from "@mui/material";
import SummaryCard from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/SummaryCard";
import useHeader from "@hooks/useHeader.ts";
import ScheduleListHeader from "components/ScheduleList/ScheduleListHeader";
import React, { useEffect, useRef, useState } from "react";
import ScheduleList from "@components/ScheduleList";
import TodayButton from "@components/common/TodayButton/TodayButton.tsx";
import FilterDrawer from "@components/layouts/common/TopBar/buttons/FilterButton/FilterDrawer.tsx";
import useMonthSchedule from "@hooks/home/useMonthSchedule.ts";

function ScheduleListPage() {
  useHeader(false);
  const options = ["최신순", "과거순"];
  const todayRef = useRef<HTMLDivElement>(null);

  const { date, subtractMonth, addMonth, pickMonth } = useHome();
  const { monthData: data, monthSchedules, isPending } = useMonthSchedule();

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [scheduleDates, setScheduleDates] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (todayRef.current) {
        const rect = todayRef.current.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight || rect.bottom < 146);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const keys = Object.keys(monthSchedules ?? {});
    if (selectedOption === "최신순") {
      setScheduleDates(keys);
    } else {
      setScheduleDates(keys.reverse());
    }
    setTimeout(() => scrollToToday(), 10);
  }, [data, selectedOption]);

  const scrollToToday = () => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <ScheduleListPageHeader
        date={moment(date).format("YYYY년 M월")}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
        handleClickFilter={() => setBottomDrawerOpen(true)}
        handleClickSearch={() => alert("search")}
        changeMonth={pickMonth}
      />

      <Stack
        py={3}
        px={2.5}
        spacing="6px"
        bgcolor="primary.main"
        sx={{ color: "#FFF" }}
      >
        <SummaryCard title="수입" amount={parseInt(data?.income ?? "")} />
        <SummaryCard title="지출" amount={parseInt(data?.expense ?? "")} />
      </Stack>

      <Box
        sx={{
          position: "sticky",
          top: 96,
          backgroundColor: "#FFF",
          zIndex: 1000,
        }}
      >
        <ScheduleListHeader
          count={data?.count ?? 0}
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Box>

      {scheduleDates.map((date) => {
        const schedules = monthSchedules[date] ?? [];
        const todaySchedules =
          selectedOption === "과거순" ? schedules.reverse() : schedules;
        return (
          <div
            key={date}
            ref={moment().isSame(date, "date") ? todayRef : undefined}
          >
            <ScheduleList
              showHeader
              date={date}
              todaySchedules={todaySchedules}
              count={todaySchedules.length}
              isError={!todaySchedules}
              isPending={isPending}
            />
          </div>
        );
      })}

      {isVisible && <TodayButton goToday={scrollToToday} type="day" />}
      <FilterDrawer
        bottomDrawerOpen={bottomDrawerOpen}
        setBottomDrawerOpen={setBottomDrawerOpen}
      />
    </>
  );
}

export default ScheduleListPage;
