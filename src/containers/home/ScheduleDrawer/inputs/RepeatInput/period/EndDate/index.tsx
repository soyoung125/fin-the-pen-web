import {
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import { Box, Stack, InputBase, FormControl } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import { useEffect, useState } from "react";
import moment from "moment";

function EndDate() {
  const schedule = useSelector(selectSchedule);
  const startDate = useSelector(selectStartDate);

  const [date, setDate] = useState({
    year: 2023,
    month: 1,
    date: 1,
    day: "월요일",
  });

  useEffect(() => {
    let date = moment(startDate);

    switch (schedule?.repeat) {
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
  }, [startDate]);

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
          <FormControl>
            <InputBase
              id="year"
              sx={{
                py: 1,
                px: "10px",
                width: "60px",
                backgroundColor: "rgba(115, 91, 242, 0.10)",
              }}
              placeholder="YYYY"
              onBlur={handleBlur}
              onChange={handleChange}
              value={date.year}
              inputProps={{
                style: { textAlign: "center" },
                min: moment(startDate).year(),
                max: moment(startDate).year() + 50,
              }}
            />
          </FormControl>

          <Box>년</Box>

          <FormControl>
            <InputBase
              id="month"
              sx={{
                py: 1,
                px: "10px",
                width: "50px",
                backgroundColor: "rgba(115, 91, 242, 0.10)",
              }}
              placeholder="MM"
              onBlur={handleBlur}
              onChange={handleChange}
              value={date.month}
              inputProps={{ style: { textAlign: "center" }, min: 1, max: 12 }}
            />
          </FormControl>

          <Box>월</Box>

          <FormControl>
            <InputBase
              id="date"
              sx={{
                py: 1,
                px: "10px",
                width: "50px",
                backgroundColor: "rgba(115, 91, 242, 0.10)",
              }}
              placeholder="DD"
              onBlur={handleBlur}
              onChange={handleChange}
              value={date.date}
              inputProps={{
                style: { textAlign: "center" },
                min: 1,
                max: moment(
                  `${date.year}-${date.month}`,
                  "YYYY-M",
                ).daysInMonth(),
              }}
            />
          </FormControl>

          <Box>일</Box>

          <Box>{date.day}</Box>
        </Stack>
      )}
    </Box>
  );
}

export default EndDate;
