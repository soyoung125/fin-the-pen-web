import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  IMPORTANCES,
  SCHEDULE_DRAWER,
} from "../../../../../constants/schedule.tsx";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { updateSchedule } from "../../domain/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";

function ImportanceInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule(dispatch, schedule, {
      target: { id: state.currentTarget.id, value: state.currentTarget.value },
    });
  };

  return (
    <Stack spacing={2} px={2.5}>
      <Typography variant="h4" sx={{ color: "primary.main" }}>
        {SCHEDULE_DRAWER.set_importance_title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        {IMPORTANCES.map((importance) => (
          <Button
            key={importance.id}
            variant="contained"
            color={
              schedule?.importance === importance.value
                ? "primary"
                : "secondary"
            }
            id="importance"
            value={importance.value}
            onClick={changeSchedule}
            fullWidth
            size="small"
            sx={{
              borderRadius: "17px",
            }}
          >
            {importance.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}

export default ImportanceInput;
