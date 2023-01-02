import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import ADD_EVENT from '../../../utils/constants/event';

function NameInput({ event, updateEvent }) {
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="name"
        startAdornment={<InputAdornment position="start">{ADD_EVENT.name}</InputAdornment>}
        value={event.name}
        onChange={updateEvent}
      />
    </FormControl>
  );
}
export default NameInput;
