import { Button, Divider, Stack, Typography } from "@mui/material";
import SelectDate from "@hooks/date-picker/components/SelectDate.tsx";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import moment from "moment";
import Modal from "@hooks/modal/Modal.tsx";

export interface DatePickerProps {
  onClickApprove: (answer: string) => void;
  onClickReject: (answer: string) => void;
}

function DatePicker({ onClickApprove, onClickReject }: DatePickerProps) {
  const [value, setValue] = useState(moment().format("YYYY-MM-DD"));
  return (
    <Modal>
      <Stack p="10px">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold" }}>
            날짜를 선택하세요.
          </Typography>
        </Stack>
        <Divider sx={{ backgroundColor: "black", height: "1px" }} />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <SelectDate value={value} setValue={setValue} />
        </LocalizationProvider>
        <Stack direction="row" gap="10px">
          <Button
            variant="outlined"
            onClick={() => onClickReject("")}
            fullWidth
          >
            취소
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
    </Modal>
  );
}

export default DatePicker;
