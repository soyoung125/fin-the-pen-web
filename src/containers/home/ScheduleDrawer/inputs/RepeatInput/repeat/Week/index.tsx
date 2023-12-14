import {
  selectRepeatType,
  selectSchedule,
  selectStartDate,
} from "@app/redux/slices/scheduleSlice";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RadioLabel from "../../radio/RadioLabel";
import InputLabel from "../../radio/RadioLabel/InputLabel";
import DateButton from "@components/common/DateButton";
import moment from "moment";
import { UpdateStateInterface } from "@type/common";

interface WeekProps {
  changeRepeat: (state: UpdateStateInterface) => void;
}

function Week({ changeRepeat }: WeekProps) {
  const schedule = useSelector(selectSchedule);
  const repeatType = useSelector(selectRepeatType);
  const weekName: { [key: string]: string } = {
    월: "MONDAY",
    화: "TUESDAY",
    수: "WEDNESDAY",
    목: "THURSDAY",
    금: "FRIDAY",
    토: "SATURDAY",
    일: "SUNDAY",
  };

  const selectedWeek = schedule?.repeat.week_type.repeat_day_of_week ?? "";

  const changeDayOfWeek = (week: string) => {
    changeRepeat({ target: { id: "repeat_day_of_week", value: week } });
  };

  const handleChange = (w: string) => {
    const selected = selectedWeek.split(", ");
    if (selected.includes(w)) {
      changeDayOfWeek(selected.filter((s) => s !== w).join(", "));
      return;
    }
    changeDayOfWeek(selected.concat(w).join(", "));
  };

  return (
    <Box>
      <RadioLabel
        value="week"
        label={
          <InputLabel
            label="매주"
            postInputLabel="주 마다"
            max={52}
            option="week"
          />
        }
      />

      {repeatType === "week" && (
        <Stack px={2.5} my={1.5} direction="row" justifyContent="space-between">
          {Object.keys(weekName).map((w) => (
            <DateButton
              key={w}
              value={w}
              handleClick={() => handleChange(weekName[w])}
              isSelected={selectedWeek.includes(weekName[w])}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Week;
