import { Box, FormControl, Input, InputAdornment } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule";
import { updateSchedule } from "../domain/schedule";
import { selectSchedule } from "../../../../app/redux/slices/scheduleSlice";
import { useAppDispatch } from "../../../../app/redux/hooks";

function NameInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state: { target: { id: string; value: string } }) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <FormControl fullWidth>
      <Input
        id="event_name"
        startAdornment={
          <InputAdornment position="start">
            <Box sx={{ color: "primary.main", fontWeight: 500 }}>
              {SCHEDULE_DRAWER.name}
            </Box>
          </InputAdornment>
        }
        value={schedule?.event_name}
        onChange={changeSchedule}
        sx={{ marginX: 1.5 }}
        inputProps={{
          style: { textAlign: "right" },
        }}
      />
    </FormControl>
  );
}
export default NameInput;
