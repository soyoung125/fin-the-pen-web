import {
  Button, Stack, TextField, Typography,
} from '@mui/material';
import ADD_EVENT from '../../../utils/constants/event';

function SpendingInput({ event, updateEvent }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>금액 설정</Typography>
      <Stack direction="row" alignItems="center">
        <Button
          variant={event.type === ADD_EVENT.type_plus ? 'contained' : 'outlined'}
          id="type"
          value={ADD_EVENT.type_plus}
          onClick={updateEvent}
        >
          {ADD_EVENT.type_plus}
        </Button>
        <Button
          variant={event.type === ADD_EVENT.type_minus ? 'contained' : 'outlined'}
          id="type"
          value={ADD_EVENT.type_minus}
          onClick={updateEvent}
        >
          {ADD_EVENT.type_minus}
        </Button>
        <TextField
          id="expected_spending"
          value={event.expected_spending}
          onChange={updateEvent}
          label={ADD_EVENT.expected_spending}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography>원</Typography>
      </Stack>
    </Stack>
  );
}
export default SpendingInput;
