import { Button, Stack, TextField, Typography } from "@mui/material";
import { TimeState } from "@components/layouts/date-picker/components/TimePicker.tsx";

interface SelectTimeProps {
  timeState: TimeState;
  setValue: (type: keyof TimeState, value: TimeState[keyof TimeState]) => void;
}

function SelectTime({ timeState, setValue }: SelectTimeProps) {
  const { meridiem, minute, hour } = timeState;
  const updateHour = (value: string) => {
    const numberValue = Number(value);
    if (numberValue < 0 || numberValue > 12) return;
    setValue("hour", numberValue);
  };

  const updateMinute = (value: string) => {
    const numberValue = Number(value);
    if (numberValue < 0 || numberValue > 59) return;
    setValue("minute", numberValue);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack width="30%">
        <Button
          fullWidth
          variant={meridiem === "오전" ? "contained" : "outlined"}
          onClick={() => setValue("meridiem", "오전")}
        >
          오전
        </Button>
        <Button
          fullWidth
          variant={meridiem === "오후" ? "contained" : "outlined"}
          onClick={() => setValue("meridiem", "오후")}
        >
          오후
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1} width="70%">
        <TextField
          value={hour}
          onChange={(e) => updateHour(e.target.value)}
        ></TextField>
        <Typography>:</Typography>
        <TextField
          value={minute}
          onChange={(e) => updateMinute(e.target.value)}
        ></TextField>
      </Stack>
    </Stack>
  );
}

export default SelectTime;
