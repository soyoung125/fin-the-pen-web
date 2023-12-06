import { selectSchedule } from "@app/redux/slices/scheduleSlice";
import { Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import { useEffect, useState } from "react";
import moment from "moment";

function Year() {
  const schedule = useSelector(selectSchedule);
  const start_date = moment(schedule?.start_date);
  const week = ["첫", "두", "세", "네", "여섯"];

  const [selected, setSelected] = useState("date");
  const date = {
    month: start_date.month(),
    date: start_date.date(),
    day: start_date.format("dddd"),
    week: start_date.week() - start_date.startOf("month").week(),
    lastWeek: start_date.daysInMonth(),
    lastDate: start_date.endOf("month"),
  };

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
            {`${date.month}월 ${week[date.week - 1]}번째 ${date.day}`}
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
