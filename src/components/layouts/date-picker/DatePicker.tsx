import {
  Button,
  Dialog as MuiDialog,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { DatePickerState } from "@components/layouts/date-picker/DatePickerWrapper.tsx";
import SelectDate from "@components/layouts/date-picker/components/SelectDate.tsx";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DatePickerContext from "@components/layouts/date-picker/DatePickerContext.tsx";
import { useContext } from "react";

function DatePicker({ onClickApprove, onClickReject }: DatePickerState) {
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

export default DatePicker;
