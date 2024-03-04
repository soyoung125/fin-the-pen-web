import useDaySchedule from "@hooks/home/useDaySchedule.ts";
import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import useSchedule from "@hooks/useSchedule.ts";
import ConsumptionCard from "@components/ScheduleList/ConsumptionCard";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import moment from "moment";
import MonthlyBudgetSummarySkeleton from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/MonthlyBudgetSummarySkeleton.tsx";
import CalendarHeaderSkeleton from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader/CalendarHeaderSkeleton.tsx";
import ScheduleList from "@pages/Home/next-components/ScheduleList";

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

      {/*{todaySchedules.map((s) => (*/}
      {/*  <ConsumptionCard*/}
      {/*    name={s.event_name}*/}
      {/*    price={Number(s.amount)}*/}
      {/*    date={s.start_date}*/}
      {/*    startTime={s.start_time}*/}
      {/*    endTime={s.end_time}*/}
      {/*    type={s.price_type}*/}
      {/*    isRepeat={s.repeat_kind !== "NONE"}*/}
      {/*    onClick={() => alert("click")}*/}
      {/*  />*/}
      {/*))}*/}
    </>
  );
}

export default DaySchedulePage;
