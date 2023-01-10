import {
  Box, FormControl, InputLabel, MenuItem, Select, Stack,
} from '@mui/material';
import { DEADLINE, REPEAT } from '../../../utils/constants/repeat';
import ADD_SCHEDULE from '../../../utils/constants/schedule';

function RepeatInput({ schedule, updateRepeat }) {
  return (
    <Box>
      {/* <Typography mx={1} sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.repeat}</Typography> */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', marginTop: 1 }}
      >
        <FormControl fullWidth size="small">
          <InputLabel>{ADD_SCHEDULE.repeating_cycle}</InputLabel>
          <Select
            name="repeating_cycle"
            value={schedule.repeating_cycle}
            label={ADD_SCHEDULE.repeating_cycle}
            onChange={updateRepeat}
          >
            {REPEAT.map((r) => (<MenuItem id="repeating_cycle" value={r}>{r}</MenuItem>))}
          </Select>
        </FormControl>

        <FormControl fullWidth size="small" disabled={schedule.repeating_cycle === '없음'}>
          <InputLabel>{ADD_SCHEDULE.repeat_deadline}</InputLabel>
          <Select
            name="repeat_deadline"
            value={schedule.repeat_deadline}
            label={ADD_SCHEDULE.repeat_deadline}
            onChange={updateRepeat}
          >
            {DEADLINE.map((d) => (<MenuItem value={d}>{d}</MenuItem>))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default RepeatInput;
