import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useState } from "react";
import moment from "moment/moment";

interface MonthPickerProps {
  defaultDate: string;
  onClickApprove: (answer: moment.Moment) => void;
  onClickReject: (answer: moment.Moment) => void;
}

function MonthPicker({
  defaultDate,
  onClickApprove,
  onClickReject,
}: MonthPickerProps) {
  const [newDate, setNewDate] = useState(moment(defaultDate));
  const handleCloseModal = () => {
    onClickReject(moment(defaultDate));
  };

  const handleSetDate = () => {
    onClickApprove(moment(newDate));
  };

  return (
    <MuiDialog
      open={true}
      onClose={() => handleCloseModal()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        ".MuiDialogContent-root": {
          padding: 0,
        },
        "& > div > div, & > div > div > div, & .MuiCalendarPicker-root": {
          width: "100%",
        },
        ".MuiPickerStaticWrapper-content": {
          minWidth: "100%",
        },
        ".MuiCalendarOrClockPicker-root > div": {
          width: "100%",
          margin: "0",
        },
        ".MuiMonthPicker-root": {
          margin: 0,
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">날짜 선택</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateCalendar
            views={["year", "month"]}
            openTo="year"
            value={newDate}
            onChange={(newValue) => {
              newValue && setNewDate(newValue);
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSetDate} autoFocus>
          설정
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default MonthPicker;
