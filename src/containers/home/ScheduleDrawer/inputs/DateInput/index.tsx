import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateAllDay } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";
import { useState } from "react";
import InputDateTime from "./InputDateTime";
import { SCHEDULE_DRAWER } from "constants/schedule";

interface DateInputProps {
  showError: boolean;
}
function DateInput({ showError }: DateInputProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const [showStart, setShowStart] = useState("");
  const [showEnd, setShowEnd] = useState("");

  const changeAllDay = (state: {
    target: { value: boolean; name: string };
  }) => {
    updateAllDay(dispatch, schedule, state);
  };

  const handleClick = (type: string, selectType: string) => {
    if (type === "start") {
      if (showStart === selectType) setShowStart("");
      else setShowStart(selectType);
    } else {
      if (showEnd === selectType) setShowEnd("");
      else setShowEnd(selectType);
    }
  };

  return (
    <>
      <InputDateTime
        date={schedule?.start_date}
        time={schedule?.start_time}
        handleClick={handleClick}
        showCalendar={showStart}
        type="start"
        showError={showError}
      />

      <InputDateTime
        date={schedule?.end_date}
        time={schedule?.end_time}
        handleClick={handleClick}
        showCalendar={showEnd}
        type="end"
        showError={showError}
      />

      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ fontSize: 13, fontWeight: 500 }}>
          {SCHEDULE_DRAWER.all_day}
        </Box>
        <SwitchButton
          checked={schedule?.all_day ?? true}
          handleChange={() =>
            changeAllDay({
              target: {
                value: !schedule?.all_day,
                name: "all_day",
              },
            })
          }
        />
      </Stack>
    </>
  );
}
export default DateInput;
