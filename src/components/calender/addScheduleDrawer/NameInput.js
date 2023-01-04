import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function NameInput({ event, updateEvent }) {
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="event_name"
        startAdornment={<InputAdornment position="start">{ADD_SCHEDULE.name}</InputAdornment>}
        value={event.event_name}
        onChange={updateEvent}
      />
    </FormControl>
  );
}
export default NameInput;
