import {
  Button,
  Dialog as MuiDialog,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import DatePickerContext from "@components/layouts/date-picker/DatePickerContext.tsx";
import { useContext } from "react";
import SelectTime from "@components/layouts/date-picker/components/SelectTime.tsx";

export interface TimePickerProps {
  onClickApprove: (answer: string) => void;
  onClickReject: (answer: string) => void;
}

function TimePicker({ onClickApprove, onClickReject }: TimePickerProps) {
  const { value, setValue } = useContext(DatePickerContext);
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
          <SelectTime setValue={setValue} />
        </div>
        <Stack direction="row" gap="10px">
          <Button
            variant="outlined"
            onClick={() => onClickReject("")}
            fullWidth
          >
            초기화
          </Button>
          <Button
            variant="contained"
            onClick={() => onClickApprove(value)}
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
