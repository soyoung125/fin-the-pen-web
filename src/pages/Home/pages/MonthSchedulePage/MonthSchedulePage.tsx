import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import Calendar from "pages/Home/pages/MonthSchedulePage/components/Calendar";
import moment from "moment/moment";
import ScheduleList from "@components/ScheduleList";
import useMonthSchedule from "@hooks/home/useMonthSchedule.ts";
import MonthlyBudgetSummarySkeleton from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/MonthlyBudgetSummarySkeleton.tsx";
import CalendarHeaderSkeleton from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader/CalendarHeaderSkeleton.tsx";
import ScheduleListSkeleton from "@components/ScheduleList/ScheduleListSkeleton.tsx";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { HomePageProps } from "@pages/Home/Home.tsx";
import { useEffect } from "react";

function MonthSchedulePage({ updateHeight, navigateTo }: HomePageProps) {
  const { date, todaySchedules, monthData, isError, isPending, changeDate } =
    useMonthSchedule();
  const showPredict = moment().isSameOrBefore(date, "month");
  const isThisMonth = moment().isSame(date, "month");

  useEffect(() => {
    updateHeight();
  }, [monthData]);

  if (isPending) {
    return (
      <Box>
        <MonthlyBudgetSummarySkeleton
          showPredict={showPredict}
          dayTitle={isThisMonth ? "이번달" : moment(date).format("M월")}
        />
        <ThickDivider />
        <CalendarHeaderSkeleton date={date} />
        <Calendar value={date} handleChange={changeDate} />
        <ThickDivider />
        <ScheduleListSkeleton />
      </Box>
    );
  }

  return (
    <Box>
      <MonthlyBudgetSummary
        income={parseInt(monthData?.income ?? "")}
        expenditure={parseInt(monthData?.expense ?? "")}
        availableAmount={parseInt(monthData?.available ?? "")}
        showPredict={showPredict}
        dayTitle={isThisMonth ? "이번달" : moment(date).format("M월")}
      />

      <ThickDivider />

      <CalendarHeader
        date={date}
        count={todaySchedules.length}
        handleClick={navigateTo}
        isToday={moment().isSame(date, "date")}
      />

      <Calendar value={date} handleChange={changeDate} />

      <ThickDivider />

      <ScheduleList
        date={date}
        todaySchedules={todaySchedules.slice(0, 3)}
        isError={isError}
        isPending={isPending}
      />

      {todaySchedules.length > 3 && (
        <Stack
          p={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1.5}
          onClick={navigateTo}
        >
          <Typography>
            <span style={{ color: "#735BF2", fontWeight: 700 }}>
              {todaySchedules.length - 3}건
            </span>
            &nbsp;일정 더보기
          </Typography>
          <KeyboardArrowRightIcon sx={{ color: "#8C919C" }} />
        </Stack>
      )}
    </Box>
  );
}

export default MonthSchedulePage;
