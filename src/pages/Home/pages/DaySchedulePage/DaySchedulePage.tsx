import useDaySchedule from "@hooks/home/useDaySchedule.ts";
import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import useSchedule from "@hooks/useSchedule.ts";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import moment from "moment";
import MonthlyBudgetSummarySkeleton from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/MonthlyBudgetSummarySkeleton.tsx";
import CalendarHeaderSkeleton from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader/CalendarHeaderSkeleton.tsx";
import ScheduleList from "@pages/Home/next-components/ScheduleList";
import ScheduleListSkeleton from "@pages/Home/next-components/ScheduleList/ScheduleListSkeleton.tsx";

function DaySchedulePage() {
  const { date, dayData, isError, isPending } = useDaySchedule();
  const { todaySchedules } = useSchedule();
  const isToday = moment().isSame(date, "day");
  const showPredict = moment().isSameOrBefore(date, "day");

  if (isPending) {
    return (
      <>
        <MonthlyBudgetSummarySkeleton
          expect={true}
          dayTitle={isToday ? "오늘의" : moment(date).format("M월D일")}
          showPredict={showPredict}
        />
        <ThickDivider />
        <CalendarHeaderSkeleton date={date} />
        <ScheduleListSkeleton />
      </>
    );
  }

  return (
    <>
      <MonthlyBudgetSummary
        income={Number(dayData?.income)}
        expenditure={Number(dayData?.dayExpense)}
        availableAmount={Number(dayData?.available ?? 0)}
        expect={Number(dayData?.expect ?? 0)}
        dayTitle={isToday ? "오늘의" : moment(date).format("M월D일")}
        showPredict={showPredict}
      />

      <ThickDivider />

      <CalendarHeader
        date={date}
        count={todaySchedules.length}
        handleClick={() => alert("list")}
        isToday={moment().isSame(date, "day")}
      />

      <ScheduleList
        date={date}
        todaySchedules={todaySchedules}
        isError={isError}
      />
    </>
  );
}

export default DaySchedulePage;
