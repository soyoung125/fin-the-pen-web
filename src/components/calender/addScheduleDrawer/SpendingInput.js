import {
  Button, Stack, TextField, Typography,
} from '@mui/material';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function SpendingInput({ schedule, updateSchedule }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>{ADD_SCHEDULE.set_spending_title}</Typography>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
        <Button
          variant={schedule.type === ADD_SCHEDULE.type_plus ? 'contained' : 'outlined'}
          id="type"
          value={ADD_SCHEDULE.type_plus}
          onClick={updateSchedule}
          size="small"
        >
          {ADD_SCHEDULE.type_plus}
        </Button>
        <Button
          variant={schedule.type === ADD_SCHEDULE.type_minus ? 'contained' : 'outlined'}
          id="type"
          value={ADD_SCHEDULE.type_minus}
          onClick={updateSchedule}
          size="small"
        >
          {ADD_SCHEDULE.type_minus}
        </Button>
        <TextField
          id="expected_spending"
          value={schedule.expected_spending}
          onChange={updateSchedule}
          label={ADD_SCHEDULE.expected_spending}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '30%' }}
          size="small"
        />
        <Typography>{ADD_SCHEDULE.won}</Typography>
      </Stack>
    </Stack>
  );
}
export default SpendingInput;
