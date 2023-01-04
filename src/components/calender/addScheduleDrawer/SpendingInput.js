import {
  Button, Stack, TextField, Typography,
} from '@mui/material';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function SpendingInput({ schedule, updateSchedule }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>금액 설정</Typography>
      <Stack direction="row" alignItems="center">
        <Button
          variant={schedule.type === ADD_SCHEDULE.type_plus ? 'contained' : 'outlined'}
          id="type"
          value={ADD_SCHEDULE.type_plus}
          onClick={updateSchedule}
        >
          {ADD_SCHEDULE.type_plus}
        </Button>
        <Button
          variant={schedule.type === ADD_SCHEDULE.type_minus ? 'contained' : 'outlined'}
          id="type"
          value={ADD_SCHEDULE.type_minus}
          onClick={updateSchedule}
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
        />
        <Typography>원</Typography>
      </Stack>
    </Stack>
  );
}
export default SpendingInput;
