import {
  selectRepeatType,
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import Option from "./Option";
import { useEffect, useState } from "react";
import moment from "moment";
import RepeatInputLabel from "../../radio/RadioLabel/RepeatInputLabel";

function Year() {
  const schedule = useSelector(selectSchedule);
  const repeatType = useSelector(selectRepeatType);
  const startDate = useSelector(selectStartDate);
  const week = ["첫", "두", "세", "네", "다섯", "여섯"];

  const [date, setDate] = useState({
    month: 1,
    date: 1,
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
      month: month,
      date: start.date(),
      day: start.format("dddd"),
      week: thisWeek - firstWeek,
      lastDate: start.endOf("month"),
    });
  }, [startDate]);

  return (
    <Box>
      <RadioLabel
        value="year"
        label={
          <RepeatInputLabel
            label="매년"
            postInputLabel="년 마다"
            max={10}
            option="year"
          />
        }
      />

      {repeatType === "year" && (
        <Option
          MonthAndDay={`${date.month}월 ${date.date}일`}
          NthDayOfMonth={`${date.month}월 ${week[date.week]}번째 ${date.day}`}
          LastDayOfMonth={`${date.month}월 마지막 ${date.day}`}
          isLastDay={date.lastDate.diff(schedule?.start_date, "day") < 7}
        />
      )}
    </Box>
  );
}

export default Year;
