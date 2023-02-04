import {
  Button, Stack, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { NOT_STABLE, SOMETHING_IS_WRONG } from '../../../../../utils/constants/common';
import { TIME_SELECTOR } from '../../../../../utils/constants/schedule';

function StateButton({ state, setState, value }) {
  return (
    <Button
      variant={state === value ? 'contained' : 'text'}
      onClick={() => setState(value)}
    >
      {value}
    </Button>
  );
}

function TimeSelector({
  timeId, currentTime, setModalOpen, changeSchedule,
}) {
  const [meridiem, setMeridiem] = useState(TIME_SELECTOR.meridiem.am);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState('00');

  const time = () => {
    let h = hours;
    if (meridiem === TIME_SELECTOR.meridiem.pm) {
      h += 12;
    }
    if (h === 24) {
      h = 0;
    }
    const text = `${h < 10 ? '0' : ''}${h}:${minutes}`;
    return text;
  };

  const setTime = () => {
    changeSchedule({
      target: {
        id: timeId,
        value: time(),
      },
    });
    setModalOpen(false);
  };

  useEffect(() => {
    // 초기에 기존 시간을 체크 해줄 수 있는 useEffect 제작이 필요함
    console.log(currentTime);
    if (timeId) {
      switch (timeId) {
        case 'start_time': // 이 부분 상수화 필요 (바깥도)
          setMeridiem(TIME_SELECTOR.meridiem.am);
          setHours(9);
          setMinutes('00');
          break;
        case 'end_time': // 이 부분 상수화 필요 (바깥도)
          setMeridiem(TIME_SELECTOR.meridiem.pm);
          setHours(11);
          setMinutes('00');
          break;
        default:
          alert(SOMETHING_IS_WRONG);
      }
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
