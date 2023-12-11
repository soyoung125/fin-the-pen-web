import {
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import { Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import { useEffect, useState } from "react";
import moment from "moment";

function Year() {
  const schedule = useSelector(selectSchedule);
  const startDate = useSelector(selectStartDate);
  const week = ["첫", "두", "세", "네", "다섯", "여섯"];

  const [selected, setSelected] = useState("date");
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
        value="Year"
        label={
          <InputLabel
            label="매년"
            postInputLabel="년 마다"
            max={10}
            type="repeat"
            option="Year"
          />
        }
      />

      {schedule?.repeat === "Year" && (
        <Stack px={2.5} my={1.5} spacing={1} alignItems="center">
          <Button
            variant={selected === "date" ? "contained" : "outlined"}
            color={selected === "date" ? "primary" : "secondary"}
            sx={{ borderRadius: "20px", width: "200px" }}
            onClick={() => setSelected("date")}
          >
            {`${date.month}월 ${date.date}일`}
          </Button>
          <Button
            variant={selected === "weekNum" ? "contained" : "outlined"}
            color={selected === "weekNum" ? "primary" : "secondary"}
            sx={{ borderRadius: "20px", width: "200px" }}
            onClick={() => setSelected("weekNum")}
          >
            {`${date.month}월 ${week[date.week]}번째 ${date.day}`}
          </Button>
          {date.lastDate.diff(schedule?.start_date, "day") < 7 && (
            <Button
              variant={selected === "lastWeek" ? "contained" : "outlined"}
              color={selected === "lastWeek" ? "primary" : "secondary"}
              sx={{ borderRadius: "20px", width: "200px" }}
              onClick={() => setSelected("lastWeek")}
            >
              {`${date.month}월 마지막 ${date.day}`}
            </Button>
          )}
        </Stack>
      )}
    </Box>
  );
}

export default Year;
