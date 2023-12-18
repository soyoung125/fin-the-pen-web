import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule.tsx";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { updateExclusion } from "../../domain/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import SwitchButton from "@components/common/SwitchButton.tsx";

function ExclusionInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const exclusion = schedule?.exclude ? true : false;

  const changeExclusion = () => {
    console.log(exclusion);
    updateExclusion(dispatch, schedule, !exclusion);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2.5}
    >
      <Typography variant="h4" sx={{ color: "primary.main" }}>
        {SCHEDULE_DRAWER.exclusion_title}
      </Typography>
      <Stack direction="row" alignItems="center">
        <SwitchButton checked={exclusion} handleChange={changeExclusion} />
      </Stack>
    </Stack>
  );
}

export default ExclusionInput;
