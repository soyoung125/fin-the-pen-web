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

function Week() {
  const schedule = useSelector(selectSchedule);
  const startDate = useSelector(selectStartDate);
  const repeatType = useSelector(selectRepeatType);
  const week = ["월", "화", "수", "목", "금", "토", "일"];

  const [selected, setSelected] = useState<string[]>([]);
  // const selected = schedule?.repeat.week_type.repeat_day_of_week ?? "";

  useEffect(() => {
    const day = moment(startDate).day();

    if (day === 0) setSelected(["일"]);
    else setSelected([week[day - 1]]);
  }, [startDate]);

  const handleChange = (w: string) => {
    if (selected.includes(w)) {
      setSelected(selected.filter((s) => s !== w));
      return;
    }
    setSelected(selected.concat(w));
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
          {week.map((w) => (
            <DateButton
              key={w}
              value={w}
              handleClick={() => handleChange(w)}
              isSelected={selected.includes(w)}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Week;
