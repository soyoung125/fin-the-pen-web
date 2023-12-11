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
    const date = moment(startDate);

    setDate({
      year: date.year(),
      month: date.month(),
      date: date.date(),
      day: date.format("dddd"),
    });
  }, [startDate]);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value, min, max } = e.target;
    if (value < min) e.target.value = min;
    if (value > max) e.target.value = max;

    switch (id) {
      case "year": {
        const d = `${e.target.value}-${date.month}-${date.date}`;
        setDate({
          ...date,
          year: Number(e.target.value),
          day: moment(d, "YYYY-M-D").format("dddd"),
        });
        break;
      }
      case "month": {
        const d = `${date.year}-${e.target.value}-${date.date}`;
        setDate({
          ...date,
          month: Number(e.target.value),
          day: moment(d, "YYYY-M-D").format("dddd"),
        });
        break;
      }
      case "date": {
        const d = `${date.year}-${date.month}-${e.target.value}`;
        setDate({
          ...date,
          date: Number(e.target.value),
          day: moment(d, "YYYY-M-D").format("dddd"),
        });
        break;
      }
      default:
        return;
    }
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
          <FormControl onSubmit={() => console.log(111)}>
            <InputBase
              id="year"
              sx={{
                py: 1,
                px: "10px",
                width: "60px",
                backgroundColor: "rgba(115, 91, 242, 0.10)",
              }}
              type="number"
              placeholder="YYYY"
              onBlur={handleChange}
              defaultValue={date.year}
              inputProps={{
                style: { textAlign: "center" },
                min: date.year,
                max: date.year + 50,
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
              type="number"
              placeholder="MM"
              onBlur={handleChange}
              defaultValue={date.month}
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
              type="number"
              placeholder="DD"
              onBlur={handleChange}
              defaultValue={date.date}
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
