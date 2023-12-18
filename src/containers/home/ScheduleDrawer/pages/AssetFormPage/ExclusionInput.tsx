import { Stack, Typography } from "@mui/material";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule.tsx";
import SwitchButton from "@components/common/SwitchButton.tsx";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

function ExclusionInput() {
  const { scheduleForm, updateExclusion } = useScheduleForm();
  const exclusion = Boolean(scheduleForm?.exclude);

  const changeExclusion = () => {
    console.log(exclusion);
    updateExclusion(!exclusion);
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
