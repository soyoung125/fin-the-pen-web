import { Box, FormControl, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../../constants/schedule.tsx";
import { updateSchedule } from "../../../domain/schedule.ts";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

interface NameInputProps {
  showError: boolean;
}

function NameInput({ showError }: NameInputProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state: { target: { id: string; value: string } }) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <FormControl fullWidth>
      <TextField
        sx={{ px: 2.5 }}
        error={showError && schedule?.event_name === ""}
        id="event_name"
        variant="standard"
        value={schedule?.event_name}
        onChange={changeSchedule}
        helperText={
          showError && schedule?.event_name === "" ? "필수 입력 값입니다!" : ""
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
