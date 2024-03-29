import { Button, Stack, Typography } from "@mui/material";
import { IMPORTANCES, SCHEDULE_DRAWER } from "@constants/schedule.ts";
import { useScheduleForm } from "../../hooks/useScheduleForm.ts";

function ImportanceInput() {
  const { scheduleForm, updateSchedule } = useScheduleForm();

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule({
      target: { id: state.currentTarget.id, value: state.currentTarget.value },
    });
  };

  return (
    <Stack spacing="10px" px={2.5}>
      <Typography
        variant="h4"
        sx={{ color: "primary.main", py: 1, borderBottom: "1px solid #F7F7F8" }}
      >
        {SCHEDULE_DRAWER.set_importance_title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        {IMPORTANCES.map((importance) => (
          <Button
            key={importance.id}
            variant="contained"
            color={
              scheduleForm?.importance === importance.value
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
