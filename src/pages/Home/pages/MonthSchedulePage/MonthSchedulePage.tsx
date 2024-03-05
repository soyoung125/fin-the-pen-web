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

function MonthSchedulePage() {
  const { date, monthData, isError, isPending, changeDate } =
    useMonthSchedule();
  const TodaySchedules = monthData?.today_schedule ?? [];
  const showPredict = moment().isSameOrBefore(date, "month");
  const isThisMonth = moment().isSame(date, "month");

  if (isPending) {
    return (
      <>
        <MonthlyBudgetSummarySkeleton
          showPredict={showPredict}
          dayTitle={isThisMonth ? "이번달" : moment(date).format("M월")}
        />
        <ThickDivider />
        <CalendarHeaderSkeleton date={date} />
        <Calendar value={date} handleChange={changeDate} />
        <ThickDivider />
        <ScheduleListSkeleton />
      </>
    );
  }

  return (
    <>
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
        handleClick={() => alert("list")}
        isToday={moment().isSame(date, "date")}
      />

      <Calendar value={date} handleChange={changeDate} />

      <ThickDivider />

      <ScheduleList
        date={date}
        todaySchedules={TodaySchedules}
        isError={isError}
      />
    </>
  );
}

export default MonthSchedulePage;
