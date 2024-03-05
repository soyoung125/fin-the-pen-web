import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import useWeekSchedule from "@hooks/home/useWeekSchedule.ts";
import WeeklyCard from "@pages/Home/pages/WeekSchedulePage/components/WeeklyCard";
import moment from "moment/moment";
import MonthlyBudgetSummarySkeleton from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/MonthlyBudgetSummarySkeleton.tsx";
import WeeklyCardSkeleton from "@pages/Home/pages/WeekSchedulePage/components/WeeklyCard/WeeklyCardSkeleton.tsx";

function WeekSchedulePage() {
  const { date, weekData, isError, isPending } = useWeekSchedule();
  const weeks = Array.from({ length: 6 }, (_, i) => (i + 1).toString());
  const isThisMonth = moment().isSame(date, "month");
  const showPredict = moment().isSameOrBefore(date, "month");

  if (isPending) {
    return (
      <>
        <MonthlyBudgetSummarySkeleton
          showPredict={showPredict}
          dayTitle={isThisMonth ? "이번달" : moment(date).format("M월")}
        />
        <ThickDivider />
        {weeks.map((w) => (
          <WeeklyCardSkeleton week={w} />
        ))}
      </>
    );
  }

  return (
    <>
      <MonthlyBudgetSummary
        income={parseInt(weekData?.income ?? "")}
        expenditure={parseInt(weekData?.expense ?? "")}
        availableAmount={parseInt(weekData?.available ?? "")}
        showPredict={showPredict}
        dayTitle={isThisMonth ? "이번달" : moment(date).format("M월")}
      />

      <ThickDivider />

      {isThisMonth && (
        <CalendarHeader date={date} handleClick={() => alert("list")} />
      )}

      {weekData &&
        weeks.map((w) => {
          const weeklyData = weekData[w];
          if (!weeklyData) return;
          const [start, end] = weeklyData.period.split("~");
          const isThisWeek =
            moment().isSameOrAfter(start, "day") &&
            moment().isSameOrBefore(end, "day");
          return (
            <WeeklyCard
              key={weeklyData.week_of_number}
              weeklyData={weeklyData}
              isThisWeek={isThisWeek}
              isThisMonth={isThisMonth}
            />
          );
        })}
    </>
  );
}

export default WeekSchedulePage;
