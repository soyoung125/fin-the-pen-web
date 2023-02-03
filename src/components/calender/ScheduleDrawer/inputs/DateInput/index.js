import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SCHEDULE_DRAWER } from '../../../../../utils/constants/schedule';
import { selectSchedule } from '../../../../../utils/redux/schedule/scheduleSlice';
import ModalStaticBackdrop from '../../../../layouts/ModalStaticBackdrop';
import { updateSchedule } from '../../utils/schedule';
import TimeSelector from './TimeSelector';

function DateInput() {
  const dispatch = useDispatch();
  const schedule = useSelector(selectSchedule);
  const [timeId, setTimeId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const changeSchedule = (state) => {
    updateSchedule(dispatch, schedule, state);
  };
  const openModal = (id) => {
    setTimeId(id);
    setModalOpen(!modalOpen);
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <TextField
          id="start_time"
          label={`${SCHEDULE_DRAWER.start_time} (동작x 구현중)`}
          fullWidth
          value={schedule.start_time}
          onClick={() => openModal('start_time')}
          size="small"
        />
        <TextField
          id="end_time"
          label={`${SCHEDULE_DRAWER.end_time} (동작x 구현중)`}
          fullWidth
          value={schedule.end_time}
          onClick={() => openModal('end_time')}
          size="small"
        />
      </Stack>
      <ModalStaticBackdrop
        keepMounted
        width="xl"
        open={modalOpen}
        component={(
          <TimeSelector timeId={timeId} setModalOpen={setModalOpen} />
        )}
      />
    </>

  );
}
export default DateInput;
