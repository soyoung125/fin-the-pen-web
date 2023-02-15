import {
  Stack, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SCHEDULE_DRAWER } from '../../../../../utils/constants/schedule';
import { selectSchedule } from '../../../../../utils/redux/schedule/scheduleSlice';
import { updateSchedule } from '../../utils/schedule';

function DateInput() {
  const dispatch = useDispatch();
  const schedule = useSelector(selectSchedule);

  const changeSchedule = (state) => {
    updateSchedule(dispatch, schedule, state);
  };

  return (
    <>
      <TextField
        id="date"
        label={SCHEDULE_DRAWER.date}
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={schedule.date}
        onChange={changeSchedule}
        size="small"
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <TextField
          id="start_time"
          label={SCHEDULE_DRAWER.start_time}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
          value={schedule.start_time}
          onChange={changeSchedule}
          size="small"
        />
        <TextField
          id="end_time"
          label={SCHEDULE_DRAWER.end_time}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
          value={schedule.end_time}
          onChange={changeSchedule}
          size="small"
        />
      </Stack>
    </>

  );
}
export default DateInput;
