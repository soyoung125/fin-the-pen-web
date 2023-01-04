import {
  Button, Stack, Typography,
} from '@mui/material';
import ADD_EVENT from '../../../utils/constants/event';

function ImportanceInput({ event, updateEvent }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>일정 중요도</Typography>
      <Stack direction="row" alignItems="center">
        <Button
          variant={event.importance === ADD_EVENT.importance_high ? 'contained' : 'outlined'}
          id="importance"
          value={ADD_EVENT.importance_high}
          onClick={updateEvent}
        >
          {ADD_EVENT.importance_high}
        </Button>
        <Button
          variant={event.importance === ADD_EVENT.importance_middle ? 'contained' : 'outlined'}
          id="importance"
          value={ADD_EVENT.importance_middle}
          onClick={updateEvent}
        >
          {ADD_EVENT.importance_middle}
        </Button>
        <Button
          variant={event.importance === ADD_EVENT.importance_low ? 'contained' : 'outlined'}
          id="importance"
          value={ADD_EVENT.importance_low}
          onClick={updateEvent}
        >
          {ADD_EVENT.importance_low}
        </Button>
      </Stack>
    </Stack>
  );
}
export default ImportanceInput;
