import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function NameInput({ schedule, updateSchedule }) {
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="event_name"
        startAdornment={<InputAdornment position="start">{ADD_SCHEDULE.name}</InputAdornment>}
        value={schedule.event_name}
        onChange={updateSchedule}
      />
    </FormControl>
  );
}
export default NameInput;
