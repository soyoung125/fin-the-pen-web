import { Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateSchedule } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";

function DateInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (
    state: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <>
      <TextField
        id="date"
        label={SCHEDULE_DRAWER.date}
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={schedule?.date}
        onChange={changeSchedule}
        size="small"
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField
          id="start_time"
          label={SCHEDULE_DRAWER.start_time}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
          value={schedule?.start_time}
          onChange={changeSchedule}
          size="small"
        />
        <TextField
          id="end_time"
          label={SCHEDULE_DRAWER.end_time}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
          value={schedule?.end_time}
          onChange={changeSchedule}
          size="small"
        />
      </Stack>
    </>
  );
}
export default DateInput;
