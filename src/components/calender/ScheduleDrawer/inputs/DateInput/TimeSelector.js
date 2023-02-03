import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { useState } from 'react';
import { NOT_AVAILABLE } from '../../../../../utils/constants/common';
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

function TimeSelector({ setModalOpen }) {
  const [meridiem, setMeridiem] = useState(TIME_SELECTOR.meridiem.am);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState('00');
  return (
    <Box>
      <Stack p={2}>
        <Typography>{NOT_AVAILABLE}</Typography>
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
      </Stack>

      <Button fullWidth variant="contained" onClick={() => setModalOpen(false)}>닫기</Button>
    </Box>
  );
}

export default TimeSelector;
