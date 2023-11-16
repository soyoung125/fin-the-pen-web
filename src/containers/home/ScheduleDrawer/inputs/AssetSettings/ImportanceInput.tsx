import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateSchedule } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";

function ImportanceInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const marks = [
    {
      value: 0,
      label: "낮음",
    },
    {
      value: 1,
      label: "중간",
    },
    {
      value: 2,
      label: "높음",
    },
  ];

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule(dispatch, schedule, {
      target: { id: state.currentTarget.id, value: state.currentTarget.value },
    });
  };

  function valuetext(value: number) {
    switch (value) {
      case 0:
        return SCHEDULE_DRAWER.importance_low;
      case 1:
        return SCHEDULE_DRAWER.importance_middle;
      default:
        return SCHEDULE_DRAWER.importance_high;
    }
  }

  return (
    <Stack spacing={2}>
      <Typography sx={{ fontWeight: 500 }}>
        {SCHEDULE_DRAWER.set_importance_title}
      </Typography>

      <Box sx={{ px: 1, pt: 3 }}>
        <Slider
          defaultValue={1}
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          min={0}
          max={2}
          valueLabelDisplay="off"
          sx={{
            ".MuiSlider-rail, .MuiSlider-track": { height: "10px" },
            ".MuiSlider-markLabel": { top: "-20px" },
            ".MuiSlider-thumb": { color: "white" },
            ".MuiSlider-mark": {
              height: "6px",
              width: "1px",
              top: "7px",
              backgroundColor: "#C8CBD0",
            },
            mb: 0,
          }}
        />
      </Box>

      {/* <Stack direction="row" alignItems="center" spacing={1}>
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
      </Stack> */}
    </Stack>
  );
}
export default ImportanceInput;
