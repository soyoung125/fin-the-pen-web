import { Box, FormControl, InputAdornment, TextField } from "@mui/material";
import { SCHEDULE_DRAWER } from "@constants/schedule.ts";
import { useScheduleForm } from "../../../hooks/useScheduleForm.ts";

interface NameInputProps {
  showError: boolean;
}

function NameInput({ showError }: NameInputProps) {
  const { scheduleForm, updateSchedule } = useScheduleForm();

  const changeSchedule = (state: { target: { id: string; value: string } }) => {
    updateSchedule(state);
  };

  return (
    <FormControl fullWidth>
      <TextField
        sx={{ px: 2.5 }}
        error={showError && scheduleForm?.event_name === ""}
        id="event_name"
        variant="standard"
        value={scheduleForm?.event_name}
        onChange={changeSchedule}
        helperText={
          showError && scheduleForm?.event_name === ""
            ? "필수 입력 값입니다!"
            : ""
        }
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box sx={{ color: "primary.main", fontWeight: 500 }}>
                {SCHEDULE_DRAWER.name}
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

export default NameInput;
