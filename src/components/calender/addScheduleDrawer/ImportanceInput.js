import {
  Button, Stack, Typography,
} from '@mui/material';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function ImportanceInput({ schedule, updateSchedule }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>일정 중요도</Typography>
      <Stack direction="row" alignItems="center">
        <Button
          variant={schedule.importance === ADD_SCHEDULE.importance_high ? 'contained' : 'outlined'}
          id="importance"
          value={ADD_SCHEDULE.importance_high}
          onClick={updateSchedule}
        >
          {ADD_SCHEDULE.importance_high}
        </Button>
        <Button
          variant={schedule.importance === ADD_SCHEDULE.importance_middle ? 'contained' : 'outlined'}
          id="importance"
          value={ADD_SCHEDULE.importance_middle}
          onClick={updateSchedule}
        >
          {ADD_SCHEDULE.importance_middle}
        </Button>
        <Button
          variant={schedule.importance === ADD_SCHEDULE.importance_low ? 'contained' : 'outlined'}
          id="importance"
          value={ADD_SCHEDULE.importance_low}
          onClick={updateSchedule}
        >
          {ADD_SCHEDULE.importance_low}
        </Button>
      </Stack>
    </Stack>
  );
}
export default ImportanceInput;
