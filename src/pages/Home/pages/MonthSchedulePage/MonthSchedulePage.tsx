import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import Calendar from "pages/Home/pages/MonthSchedulePage/components/Calendar";
import moment from "moment/moment";
import ScheduleList from "@pages/Home/next-components/ScheduleList";
import useMonthSchedule from "@hooks/home/useMonthSchedule.ts";
import MonthlyBudgetSummarySkeleton from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/MonthlyBudgetSummarySkeleton.tsx";
import CalendarHeaderSkeleton from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader/CalendarHeaderSkeleton.tsx";
import ScheduleListSkeleton from "@pages/Home/next-components/ScheduleList/ScheduleListSkeleton.tsx";
import { Box } from "@mui/material";
import { HomePageProps } from "@pages/Home/Home.tsx";
import { useEffect } from "react";

function MonthSchedulePage({ updateHeight, navigateTo }: HomePageProps) {
  const { date, monthData, isError, isPending, changeDate } =
    useMonthSchedule();
  const TodaySchedules = monthData?.today_schedule ?? [];
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
        count={TodaySchedules.length}
        handleClick={navigateTo}
        isToday={moment().isSame(date, "date")}
      />

      <Calendar value={date} handleChange={changeDate} />

      <ThickDivider />

      <ScheduleList
        date={date}
        todaySchedules={TodaySchedules}
        isError={isError}
      />
    </Box>
  );
}

export default MonthSchedulePage;
