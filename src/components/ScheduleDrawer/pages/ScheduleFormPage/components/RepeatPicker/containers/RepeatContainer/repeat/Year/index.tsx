import {
  selectScheduleForm,
  selectStartDate,
} from "@redux/slices/scheduleSlice.tsx";
import { useSelector } from "react-redux";
import RadioLabel from "@components/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatPicker/containers/RepeatContainer/radio/RadioLabel";
import Option from "./Option.tsx";
import { useEffect, useState } from "react";
import moment from "moment";
import RepeatInputLabel from "../RepeatInputLabel.tsx";
import { RepeatTypeProps } from "@app/types/schedule.ts";

function Year({ repeatType }: RepeatTypeProps) {
  const schedule = useSelector(selectScheduleForm);
  const startDate = useSelector(selectStartDate);

  const [date, setDate] = useState({
    month: "01",
    date: "01",
    day: "월요일",
    week: 0,
    lastDate: moment(),
  });

  useEffect(() => {
    const start = moment(startDate);
    const month = start.month() + 1;
    const firstWeek = moment(startDate).startOf("month").week();
    const thisWeek = month === 12 && start.week() === 1 ? 53 : start.week();

    setDate({
      month: start.format("MM"),
      date: start.format("DD"),
      day: start.format("dddd"),
      week: thisWeek - firstWeek + 1,
      lastDate: start.endOf("month"),
    });
  }, [startDate]);

  return (
    <>
      <RadioLabel
        value="year"
        label={
          <RepeatInputLabel
            label="매년"
            postInputLabel="년 마다"
            max={10}
            option="year"
            repeatType={repeatType}
          />
        }
      />

      {repeatType === "year" && (
        <Option
          MonthAndDay={`${date.month}월 ${date.date}일`}
          NthDayOfMonth={`${date.month}월 ${date.week}번째 ${date.day}`}
          LastDayOfMonth={`${date.month}월 마지막 ${date.day}`}
          isLastDay={date.lastDate.diff(schedule?.start_date, "day") < 7}
        />
      )}
    </>
  );
}

export default Year;
