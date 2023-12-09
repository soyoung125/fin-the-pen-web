import {
  Button,
  Dialog as MuiDialog,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { DatePickerState } from "@components/layouts/date-picker/DatePickerWrapper.tsx";

function DatePicker({
  title,
  content,
  onClickApprove,
  onClickReject,
  rejectText,
  approveText,
}: DatePickerState) {
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
            {title}
          </Typography>
        </Stack>
        <Divider sx={{ backgroundColor: "black", height: "1px" }} />
        <Typography variant="h2" textAlign="center" my="24px">
          {content}
        </Typography>
        <Stack direction="row" gap="10px">
          {rejectText && (
            <Button variant="outlined" onClick={onClickReject} fullWidth>
              {rejectText}
            </Button>
          )}
          {approveText && (
            <Button
              variant="contained"
              onClick={() => onClickApprove("hi")}
              fullWidth
            >
              {approveText}
            </Button>
          )}
        </Stack>
      </Stack>
    </MuiDialog>
  );
}

export default DatePicker;
