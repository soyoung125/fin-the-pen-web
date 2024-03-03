import { SyntheticEvent, useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  changeViewMode,
  selectMonth,
  selectViewMode,
} from "@redux/slices/scheduleSlice.tsx";
import { setIsAuthenticatedFalse } from "@redux/slices/commonSlice.tsx";
import useHeader from "@hooks/useHeader.ts";
import { VIEW_MODE } from "@constants/schedule.ts";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";
import { HEADER_MODE } from "@app/types/common.ts";
import SelectYearMonth from "@components/common/SelectYearMonth";
import useSchedule from "@hooks/useSchedule.ts";
import moment from "moment";
import MenuTab from "@pages/Home/next-components/HomeHeader/MenuTab";
import MonthlyBudgetSummary from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary";
import ThickDivider from "@components/common/ThickDivider.tsx";
import CalendarHeader from "@pages/Home/next-components/ScheduleCalendar/CalendarHeader";
import Calendar from "@pages/Home/next-components/ScheduleCalendar/Calendar";
import ScheduleHeader from "@pages/Home/next-components/ScheduleList/ScheduleHeader";
import useHome from "@hooks/useHome.ts";
import ConsumptionCard from "@components/ScheduleList/ConsumptionCard";
import ScheduleList from "@pages/Home/next-components/ScheduleList";

function Home() {
  const dispatch = useAppDispatch();
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const {
    date,
    monthData,
    isError,
    isPending,
    subtractMonth,
    addMonth,
    pickMonth,
    changeDate,
  } = useHome();
  const TodaySchedules = monthData?.today_schedule ?? [];
  const labels = ["월 별", "주 별", "일 별"];
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  console.log(monthData);

  const handleChangeShow = () => setShow((prevState) => !prevState);
  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(changeViewMode(VIEW_MODE.schedule));
    if (isHideBudgetMode) {
      dispatch(setIsAuthenticatedFalse());
    }
  }, []);

  useHeader(true, HEADER_MODE.home);

  return (
    <>
      <Box my={1} mx={2.5}>
        <SelectYearMonth
          year={moment(date).year()}
          month={moment(date).month() + 1}
          lastMonth={subtractMonth}
          nextMonth={addMonth}
          changeYearAndMonth={pickMonth}
        />
      </Box>

      <MenuTab labels={labels} value={value} handleChange={handleChangeTab} />

      <MonthlyBudgetSummary
        income={100000}
        expenditure={100000}
        availableAmount={1000000}
      />

      <ThickDivider />

      <CalendarHeader
        date={date}
        count={TodaySchedules.length}
        handleClick={() => alert("list")}
      />

      <Calendar value={date} handleChange={changeDate} />

      <ThickDivider />

      <ScheduleHeader
        show={show}
        handleChange={handleChangeShow}
        isToday={moment().isSame(date, "date")}
      />

      {/*{monthData?.today_schedule.map((s) => (*/}
      {/*  <ConsumptionCard*/}
      {/*    name={s.event_name}*/}
      {/*    date={s.start_date}*/}
      {/*    endTime={s.end_time}*/}
      {/*    startTime={s.start_time}*/}
      {/*    type={s.price_type}*/}
      {/*    price={Number(s.amount)}*/}
      {/*    isRepeat={s.repeat_kind !== "NONE"}*/}
      {/*  />*/}
      {/*))}*/}
      <ScheduleList
        date={date}
        todaySchedules={TodaySchedules}
        isError={isError}
      />
    </>
  );
}

export default Home;
