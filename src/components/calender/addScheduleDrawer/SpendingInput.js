/* eslint-disable no-nested-ternary */
import {
  Button, Stack, TextField, Typography,
} from '@mui/material';
import { ADD_SCHEDULE } from '../../../utils/constants/schedule';

function SpendingInput({
  schedule, updateSchedule, mode, isDisable, updateSpandingType,
}) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>{ADD_SCHEDULE.set_spending_title}</Typography>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
        {(mode === 'create') || (schedule.type === ADD_SCHEDULE.type_plus)
          ? (
            <Button
              variant={schedule.type === ADD_SCHEDULE.type_plus ? 'contained' : 'outlined'}
              id="type"
              value={ADD_SCHEDULE.type_plus}
              onClick={
                isDisable ? null
                  : (
                    mode === 'create' ? updateSchedule : updateSpandingType
                  )
              }
              size="small"
              sx={{
                borderRadius: 5, minWidth: 0, width: '30px', height: '30px',
              }}
            >
              {ADD_SCHEDULE.type_plus}
            </Button>
          )
          : null}
        {(mode === 'create') || (schedule.type === ADD_SCHEDULE.type_minus)
          ? (
            <Button
              variant={schedule.type === ADD_SCHEDULE.type_minus ? 'contained' : 'outlined'}
              id="type"
              value={ADD_SCHEDULE.type_minus}
              onClick={
                isDisable ? null
                  : (
                    mode === 'create' ? updateSchedule : updateSpandingType
                  )
              }
              size="small"
              sx={{
                borderRadius: 5, minWidth: 0, width: '30px', height: '30px',
              }}
            >
              {ADD_SCHEDULE.type_minus}
            </Button>
          )
          : null}
        <TextField
          id="expected_spending"
          disabled={isDisable}
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
