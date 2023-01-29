/* eslint-disable no-unused-vars */
import {
  FormControl, IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { SCHEDULE_DRAWER } from '../../../../utils/constants/schedule';
import { updateSchedule } from '../utils/schedule';

function NameInput({
  schedule, setSchedule, updateAlarm,
}) {
  const updateState = (state) => {
    updateSchedule(schedule, setSchedule, state);
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
              onClick={updateAlarm}
              edge="end"
            >
              {schedule.alarm ? <NotificationsNoneIcon color="primary" /> : <NotificationsNoneIcon />}
            </IconButton>
          </InputAdornment>
        )}
        value={schedule.event_name}
        onChange={updateState}
        size="small"
      />
    </FormControl>
  );
}
export default NameInput;
