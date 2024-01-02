import { Box, Stack } from "@mui/material";
import SwitchButton from "@components/common/SwitchButton.tsx";
import InputDateTime from "./InputDateTime.tsx";
import { SCHEDULE_DRAWER } from "@constants/schedule.tsx";
import { useScheduleForm } from "../../../../hooks/useScheduleForm.ts";

interface DateInputProps {
  showError: boolean;
}

function DateInput({ showError }: DateInputProps) {
  const { scheduleForm, updateAllDay } = useScheduleForm();

  const changeAllDay = (state: {
    target: { value: boolean; name: string };
  }) => {
    updateAllDay(state);
  };

  return (
    <>
      <InputDateTime
        date={scheduleForm?.start_date}
        time={scheduleForm?.start_time}
        type="start"
        showError={showError}
      />

      <InputDateTime
        date={scheduleForm?.end_date}
        time={scheduleForm?.end_time}
        type="end"
        showError={showError}
      />

      <Stack direction="row" justifyContent="space-between" sx={{ px: 2.5 }}>
        <Box sx={{ fontSize: 13, fontWeight: 500 }}>
          {SCHEDULE_DRAWER.all_day}
        </Box>
        <SwitchButton
          checked={scheduleForm?.all_day ?? true}
          handleChange={() =>
            changeAllDay({
              target: {
                value: !scheduleForm?.all_day,
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
