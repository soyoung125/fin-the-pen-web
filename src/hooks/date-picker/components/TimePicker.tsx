import {
  Button,
  Dialog as MuiDialog,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SelectTime from "@hooks/date-picker/components/SelectTime.tsx";

export interface TimePickerProps {
  defaultTime: string;
  onClickApprove: (answer: string) => void;
  onClickReject: (answer: string) => void;
}

export interface TimeState {
  meridiem: "오후" | "오전";
  hour: number;
  minute: number;
}

const convertTimeToState = (time: string): TimeState => {
  const [hour, minute] = time.split(":");
  const meridiem = Number(hour) > 12 && Number(hour) !== 24 ? "오후" : "오전";
  const convertedHour = Number(hour) > 12 ? Number(hour) - 12 : Number(hour);
  return { meridiem, hour: convertedHour, minute: Number(minute) };
};

const convertStateToTime = (state: TimeState): string => {
  const { meridiem, hour, minute } = state;
  const convertedHour = meridiem === "오후" && hour !== 24 ? hour + 12 : hour;
  return `${convertedHour}:${minute}`;
};

function TimePicker({
  defaultTime,
  onClickApprove,
  onClickReject,
}: TimePickerProps) {
  const [time, setTime] = useState(convertTimeToState(defaultTime));
  const setValue = (
    type: keyof TimeState,
    value: TimeState[keyof TimeState]
  ) => {
    setTime((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <MuiDialog
      sx={{ "& .MuiDialog-paper": { borderRadius: "1rem", width: "100%" } }}
      open={true}
      scroll="body"
    >
      <Stack p="20px">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold" }}>
            시간을 선택하세요.
          </Typography>
        </Stack>
        <Divider sx={{ backgroundColor: "black", height: "1px" }} />
        <div>
          <SelectTime timeState={time} setValue={setValue} />
        </div>
        <Stack direction="row" gap="10px">
          <Button
            variant="outlined"
            onClick={() => onClickReject(defaultTime)}
            fullWidth
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={() => onClickApprove(convertStateToTime(time))}
            fullWidth
          >
            선택
          </Button>
        </Stack>
      </Stack>
    </MuiDialog>
  );
}

export default TimePicker;
