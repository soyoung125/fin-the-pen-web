import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import Calendar from "@pages/Home/next-components/ScheduleCalendar/Calendar";
import ScheduleHeader from "@pages/Home/next-components/ScheduleList/ScheduleHeader";
import moment from "moment/moment";
import ScheduleList from "@pages/Home/next-components/ScheduleList";
import { useState } from "react";
import useMonthSchedule from "@hooks/home/useMonthSchedule.ts";

function MonthSchedulePage() {
  const { date, monthData, isError, isPending, changeDate } =
    useMonthSchedule();
  const TodaySchedules = monthData?.today_schedule ?? [];
  const showPredict = moment().isSameOrBefore(date, "month");

  return (
    <>
      <MonthlyBudgetSummary
        income={parseInt(monthData?.income ?? "")}
        expenditure={parseInt(monthData?.expense ?? "")}
        availableAmount={parseInt(monthData?.available ?? "")}
        showPredict={showPredict}
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

      {/*<ScheduleHeader*/}
      {/*  show={show}*/}
      {/*  handleChange={handleChangeShow}*/}
      {/*  isToday={moment().isSame(date, "date")}*/}
      {/*/>*/}

      <ScheduleList
        date={date}
        todaySchedules={TodaySchedules}
        isError={isError}
      />
    </>
  );
}

export default MonthSchedulePage;