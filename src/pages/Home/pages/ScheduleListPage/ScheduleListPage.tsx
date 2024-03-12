import ScheduleListPageHeader from "components/ScheduleList/ScheduleListPageHeader";
import useHome from "@hooks/useHome.ts";
import moment from "moment";
import { Stack } from "@mui/material";
import SummaryCard from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/SummaryCard";
import useHeader from "@hooks/useHeader.ts";
import ScheduleListHeader from "components/ScheduleList/ScheduleListHeader";
import { useEffect, useState } from "react";
import useSchedule from "@hooks/useSchedule.ts";
import ScheduleList from "@components/ScheduleList";

function ScheduleListPage() {
  useHeader(false);
  const options = ["최신순", "과거순"];

  const { date, subtractMonth, addMonth, pickMonth } = useHome();
  const { data, monthSchedules, isError, isPending } = useSchedule();

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [scheduleDates, setScheduleDates] = useState<string[]>([]);

  useEffect(() => {
    const keys = Object.keys(monthSchedules ?? {});
    if (selectedOption === "최신순") {
      setScheduleDates(keys);
    } else {
      setScheduleDates(keys.reverse());
    }
  }, [data, selectedOption]);

  return (
    <>
      <ScheduleListPageHeader
        date={moment(date).format("YYYY년 M월")}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
        handleClickFilter={() => alert("filter")}
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
        <SummaryCard title="수입" amount={data?.deposit ?? 0} />
        <SummaryCard title="지출" amount={data?.withdraw ?? 0} />
      </Stack>

      <ScheduleListHeader
        count={data?.count ?? 0}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      {scheduleDates.map((date) => {
        const schedules = monthSchedules[date] ?? [];
        const todaySchedules =
          selectedOption === "과거순" ? schedules.reverse() : schedules;
        return (
          <ScheduleList
            key={date}
            showHeader
            date={date}
            todaySchedules={todaySchedules}
            isError={isError}
          />
        );
      })}
    </>
  );
}

export default ScheduleListPage;
