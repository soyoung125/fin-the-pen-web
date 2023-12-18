import {
  selectRepeat,
  selectSchedule,
  selectStartDate,
} from "@redux/slices/scheduleSlice.tsx";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import { useEffect, useState } from "react";
import moment from "moment";
import Input from "./Input.tsx";

function EndDate() {
  const schedule = useSelector(selectSchedule);
  const startDate = useSelector(selectStartDate);
  const repeat = useSelector(selectRepeat);

  const [date, setDate] = useState({
    year: 2023,
    month: 1,
    date: 1,
    day: "월요일",
  });

  useEffect(() => {
    let date = moment(startDate);

    switch (repeat) {
      case "AllDay": {
        date = date.add(1, "w");
        break;
      }
      case "Week": {
        date = date.add(1, "M");
        break;
      }
      case "Month": {
        date = date.add(1, "y");
        break;
      }
      case "Year": {
        date = date.add(10, "y");
        break;
      }
      default:
        return;
    }

    setDate({
      year: date.year(),
      month: date.month() + 1,
      date: date.date(),
      day: date.format("dddd"),
    });
  }, [startDate, repeat]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value, min, max } = e.target;
    let newValue = Number(value);
    if (newValue < Number(min)) newValue = Number(min);
    if (newValue > Number(max)) newValue = Number(max);

    switch (id) {
      case "year": {
        const d = `${newValue}-${date.month}-${date.date}`;
        setDate({
          ...date,
          year: newValue,
          day: moment(d, "YYYY-M-D").format("dddd"),
        });
        break;
      }
      case "month": {
        const d = `${date.year}-${newValue}-${date.date}`;
        setDate({
          ...date,
          month: newValue,
          day: moment(d, "YYYY-M-D").format("dddd"),
        });
        break;
      }
      case "date": {
        const d = `${date.year}-${date.month}-${newValue}`;
        setDate({
          ...date,
          date: newValue,
          day: moment(d, "YYYY-M-D").format("dddd"),
        });
        break;
      }
      default:
        return;
    }
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setDate({
      ...date,
      [e.target.id]: Number(e.target.value) || "",
    });
  };

  return (
    <Box>
      <RadioLabel value="end" label="종료 날짜" />

      {schedule?.period === "end" && (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          mt={0.5}
        >
          <Input
            id="year"
            value={date.year}
            handleBlur={handleBlur}
            handleChange={handleChange}
            min={moment(startDate).year()}
            max={moment(startDate).year() + 50}
            width="60px"
          />

          <Box>년</Box>

          <Input
            id="month"
            value={date.month}
            handleBlur={handleBlur}
            handleChange={handleChange}
            max={12}
          />

          <Box>월</Box>

          <Input
            id="date"
            value={date.date}
            handleBlur={handleBlur}
            handleChange={handleChange}
            max={moment(`${date.year}-${date.month}`, "YYYY-M").daysInMonth()}
          />

          <Box>일</Box>

          <Box>{date.day}</Box>
        </Stack>
      )}
    </Box>
  );
}

export default EndDate;
