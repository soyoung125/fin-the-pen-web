import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { updateAllDay } from "../../../../domain/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import SwitchButton from "@components/common/SwitchButton.tsx";
import InputDateTime from "./InputDateTime.tsx";
import { SCHEDULE_DRAWER } from "../../../../../../../constants/schedule.tsx";

interface DateInputProps {
  showError: boolean;
}

function DateInput({ showError }: DateInputProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeAllDay = (state: {
    target: { value: boolean; name: string };
  }) => {
    updateAllDay(dispatch, schedule, state);
  };

  return (
    <>
      <InputDateTime
        date={schedule?.start_date}
        time={schedule?.start_time}
        type="start"
        showError={showError}
      />

      <InputDateTime
        date={schedule?.end_date}
        time={schedule?.end_time}
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
