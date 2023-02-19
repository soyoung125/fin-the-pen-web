import {
  FormControl, IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch, useSelector } from 'react-redux';
import { SCHEDULE_DRAWER } from '../../../../utils/constants/schedule';
import { updateSchedule } from '../domain/schedule';
import { selectSchedule } from '../../../../utils/redux/schedule/scheduleSlice';

function NameInput() {
  const dispatch = useDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state) => {
    updateSchedule(dispatch, schedule, state);
  };

  const changeAlarm = () => {
    updateSchedule(dispatch, schedule, {
      target: {
        id: 'alarm',
        value: !schedule.alarm,
      },
    });
  };
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="event_name"
        startAdornment={<InputAdornment position="start">{SCHEDULE_DRAWER.name}</InputAdornment>}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={changeAlarm}
              edge="end"
            >
              <NotificationsNoneIcon color={schedule.alarm ? 'primary' : ''} />
            </IconButton>
          </InputAdornment>
        )}
        value={schedule.event_name}
        onChange={changeSchedule}
        size="small"
        inputProps={{
          style: { textAlign: 'right' },
        }}
      />
    </FormControl>
  );
}
export default NameInput;
