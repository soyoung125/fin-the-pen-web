import {
  Stack, Switch, Typography,
} from '@mui/material';
import { SCHEDULE_DRAWER } from '../../../../utils/constants/schedule';
import { updateExclusion } from '../utils/schedule';

function ExclusionInput({
  schedule, setSchedule,
}) {
  const changeExclustion = (state) => {
    updateExclusion(schedule, setSchedule, state);
  };
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>{SCHEDULE_DRAWER.exclusion_title}</Typography>
      <Stack direction="row" alignItems="center">
        <Switch
          id="exclusion"
          checked={schedule.exclusion}
          value={schedule.exclusion}
          onChange={changeExclustion}
        />
      </Stack>
    </Stack>
  );
}
export default ExclusionInput;
