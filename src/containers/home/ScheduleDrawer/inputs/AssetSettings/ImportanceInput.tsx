import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateSchedule } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";

function ImportanceInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule(dispatch, schedule, {
      target: { id: state.currentTarget.id, value: state.currentTarget.value },
    });
  };

  return (
    <Stack
      spacing={2}
    >
      <Typography sx={{ fontWeight: 500 }}>{SCHEDULE_DRAWER.set_importance_title}</Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          variant={
            schedule?.importance === SCHEDULE_DRAWER.importance_high
              ? "contained"
              : "outlined"
          }
          id="importance"
          value={SCHEDULE_DRAWER.importance_high}
          onClick={changeSchedule}
          fullWidth
          size="small"
          sx={{
            borderRadius: "17px",
          }}
        >
          {SCHEDULE_DRAWER.importance_high}
        </Button>
        <Button
          variant={
            schedule?.importance === SCHEDULE_DRAWER.importance_middle
              ? "contained"
              : "outlined"
          }
          id="importance"
          value={SCHEDULE_DRAWER.importance_middle}
          onClick={changeSchedule}
          fullWidth
          size="small"
          sx={{
            borderRadius: "17px",
          }}
        >
          {SCHEDULE_DRAWER.importance_middle}
        </Button>
        <Button
          variant={
            schedule?.importance === SCHEDULE_DRAWER.importance_low
              ? "contained"
              : "outlined"
          }
          id="importance"
          value={SCHEDULE_DRAWER.importance_low}
          onClick={changeSchedule}
          fullWidth
          size="small"
          sx={{
            borderRadius: "17px",
          }}
        >
          {SCHEDULE_DRAWER.importance_low}
        </Button>
      </Stack>
    </Stack>
  );
}
export default ImportanceInput;
