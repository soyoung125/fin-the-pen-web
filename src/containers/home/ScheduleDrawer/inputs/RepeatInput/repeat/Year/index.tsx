import {
  selectRepeatType,
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import { Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import { useEffect, useState } from "react";
import moment from "moment";
import { useAppDispatch } from "@app/redux/hooks";
import { updateYearRepeat } from "@containers/home/ScheduleDrawer/domain/schedule";
import OptionButton from "@components/repeat/OptionButton";

function Year() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const startDate = useSelector(selectStartDate);
  const repeatType = useSelector(selectRepeatType);
  const week = ["첫", "두", "세", "네", "다섯", "여섯"];

  const yearRepeat = schedule?.repeat.year_type.year_category ?? "";

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

  const changeYearRepeat = (e: React.MouseEvent) => {
    updateYearRepeat(dispatch, schedule, e);
  };

  return (
    <Box>
      <RadioLabel
        value="year"
        label={
          <InputLabel
            label="매년"
            postInputLabel="년 마다"
            max={10}
            option="year"
          />
        }
      />

      {repeatType === "year" && (
        <Stack px={2.5} my={1.5} spacing={1} mx="auto" sx={{ width: "200px" }}>
          <OptionButton
            id="MonthAndDay"
            isSelected={yearRepeat === "MonthAndDay"}
            value={`${date.month}월 ${date.date}일`}
            handleClick={changeYearRepeat}
          />

          <OptionButton
            id="NthDayOfMonth"
            isSelected={yearRepeat === "NthDayOfMonth"}
            value={`${date.month}월 ${week[date.week]}번째 ${date.day}`}
            handleClick={changeYearRepeat}
          />

          {date.lastDate.diff(schedule?.start_date, "day") < 7 && (
            <OptionButton
              id="LastDayOfMonth"
              isSelected={yearRepeat === "LastDayOfMonth"}
              value={`${date.month}월 마지막 ${date.day}`}
              handleClick={changeYearRepeat}
            />
          )}
        </Stack>
      )}
    </Box>
  );
}

export default Year;
