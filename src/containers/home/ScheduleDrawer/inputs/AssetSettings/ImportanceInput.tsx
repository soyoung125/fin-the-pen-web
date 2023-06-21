import {
  Button, Stack, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { SCHEDULE_DRAWER } from '../../../../../domain/constants/schedule';
import { selectSchedule } from '../../../../../app/redux/slices/scheduleSlice';
import { updateSchedule } from '../../domain/schedule';
import { useAppDispatch } from '../../../../../app/redux/hooks';

function ImportanceInput() {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule(dispatch, schedule, { target: { id: state.currentTarget.id, value: state.currentTarget.value }});
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>{SCHEDULE_DRAWER.set_importance_title}</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          variant={schedule?.importance === SCHEDULE_DRAWER.importance_high ? 'contained' : 'outlined'}
          id="importance"
          value={SCHEDULE_DRAWER.importance_high}
          onClick={changeSchedule}
          size="small"
        >
          {SCHEDULE_DRAWER.importance_high}
        </Button>
        <Button
          variant={schedule?.importance === SCHEDULE_DRAWER.importance_middle ? 'contained' : 'outlined'}
          id="importance"
          value={SCHEDULE_DRAWER.importance_middle}
          onClick={changeSchedule}
          size="small"
        >
          {SCHEDULE_DRAWER.importance_middle}
        </Button>
        <Button
          variant={schedule?.importance === SCHEDULE_DRAWER.importance_low ? 'contained' : 'outlined'}
          id="importance"
          value={SCHEDULE_DRAWER.importance_low}
          onClick={changeSchedule}
          size="small"
        >
          {SCHEDULE_DRAWER.importance_low}
        </Button>
      </Stack>
    </Stack>
  );
}
export default ImportanceInput;
