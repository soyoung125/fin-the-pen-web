import {
  Stack, Switch, Typography,
} from '@mui/material';
import { ADD_SCHEDULE } from '../../../utils/constants/schedule';

function ExclusionInput({ schedule, updateExclusion, isDisable }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>{ADD_SCHEDULE.exclusion_title}</Typography>
      <Stack direction="row" alignItems="center">
        <Switch
          id="exclusion"
          checked={schedule.exclusion}
          value={schedule.exclusion}
          onChange={!isDisable && updateExclusion}
        />
      </Stack>
    </Stack>
  );
}
export default ExclusionInput;
