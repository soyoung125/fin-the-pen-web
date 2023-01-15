import {
  FormControl, IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ADD_SCHEDULE } from '../../../../utils/constants/schedule';

function NameInput({
  schedule, updateSchedule, updateAlarm, isDisable,
}) {
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="event_name"
        disabled={isDisable}
        startAdornment={<InputAdornment position="start">{ADD_SCHEDULE.name}</InputAdornment>}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={updateAlarm}
              // disabled={isDisable} // disabled하면 색이 사라져 알람을 설정한 일정인지 확인 불가
              edge="end"
            >
              {schedule.alarm ? <NotificationsNoneIcon color="primary" /> : <NotificationsNoneIcon />}
            </IconButton>
          </InputAdornment>
        )}
        value={schedule.event_name}
        onChange={updateSchedule}
        size="small"
      />
    </FormControl>
  );
}
export default NameInput;
