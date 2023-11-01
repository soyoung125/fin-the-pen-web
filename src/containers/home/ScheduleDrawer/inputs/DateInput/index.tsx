import { Box, Input, InputAdornment, InputBase } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateSchedule } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";

function DateInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (
    state: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <>
      <Input
        type="date"
        id="date"
        startAdornment={
          <InputAdornment position="start">
            <Box sx={{ color: "primary.main", fontWeight: 500 }}>
              {SCHEDULE_DRAWER.start_time}
            </Box>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            <InputBase
              id="start_time"
              type="time"
              value={schedule?.start_time}
              onChange={changeSchedule}
              inputProps={{
                style: { textAlign: "right" },
              }}
            />
          </InputAdornment>
        }
        value={schedule?.date}
        onChange={changeSchedule}
      />

      <Input
        type="date"
        id="date"
        startAdornment={
          <InputAdornment position="start">
            <Box sx={{ color: "primary.main", fontWeight: 500 }}>
              {SCHEDULE_DRAWER.end_time}
            </Box>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            <InputBase
              id="end_time"
              type="time"
              value={schedule?.end_time}
              onChange={changeSchedule}
              inputProps={{
                style: { textAlign: "right" },
              }}
            />
          </InputAdornment>
        }
        value={schedule?.date}
        onChange={changeSchedule}
      />
    </>
  );
}
export default DateInput;
