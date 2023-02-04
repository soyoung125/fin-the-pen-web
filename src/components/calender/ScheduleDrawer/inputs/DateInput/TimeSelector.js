import {
  Button, Stack, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { NOT_STABLE } from '../../../../../utils/constants/common';
import { TIME_SELECTOR } from '../../../../../utils/constants/schedule';
import { convert12to24, convert24to12 } from '../../../../../utils/tools';
import StateButton from './StateButton';

function TimeSelector({
  timeId, currentTime, setModalOpen, changeSchedule,
}) {
  const [meridiem, setMeridiem] = useState(TIME_SELECTOR.meridiem.am);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState('00');

  const setTime = () => {
    changeSchedule({
      target: {
        id: timeId,
        value: convert12to24(meridiem, hours, minutes),
      },
    });
    setModalOpen(false);
  };

  const initTime = (currentMeridiem, currentHours, currentMinutes) => {
    setMeridiem(currentMeridiem);
    setHours(currentHours);
    setMinutes(currentMinutes);
  };

  useEffect(() => {
    const time12type = convert24to12(currentTime);
    const time = time12type[1].split(':');
    if (timeId) {
      initTime(time12type[0], Number(time[0]), time[1]);
    }
  }, [timeId, currentTime]);

  return (
    <Stack p={2}>
      <Typography>{NOT_STABLE}</Typography>
      <Typography>{timeId}</Typography>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Stack>
          <StateButton
            value={TIME_SELECTOR.meridiem.am}
            state={meridiem}
            setState={setMeridiem}
          />
          <StateButton
            value={TIME_SELECTOR.meridiem.pm}
            state={meridiem}
            setState={setMeridiem}
          />
        </Stack>
        <Stack>
          { Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <StateButton
              value={n}
              state={hours}
              setState={setHours}
            >
              {n}
            </StateButton>
          ))}
        </Stack>
        <Stack>
          <StateButton
            value={TIME_SELECTOR.minutes.zero}
            state={minutes}
            setState={setMinutes}
          >
            {TIME_SELECTOR.minutes.zero}
          </StateButton>
          <StateButton
            value={TIME_SELECTOR.minutes.thirty}
            state={minutes}
            setState={setMinutes}
          >
            {TIME_SELECTOR.minutes.thirty}
          </StateButton>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button fullWidth variant="contained" color="error" onClick={() => setModalOpen(false)}>닫기</Button>
        <Button fullWidth variant="contained" color="success" onClick={() => setTime()}>설정하기</Button>
      </Stack>
    </Stack>
  );
}

export default TimeSelector;
