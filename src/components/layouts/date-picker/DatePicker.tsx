import {
  Button,
  Dialog as MuiDialog,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { DatePickerState } from "@components/layouts/date-picker/DatePickerWrapper.tsx";

function DatePicker({ onClickApprove, onClickReject }: DatePickerState) {
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
        <Typography variant="h2" textAlign="center" my="24px">
          {/*{content}*/}
        </Typography>
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
            onClick={() => onClickApprove("hi")}
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
