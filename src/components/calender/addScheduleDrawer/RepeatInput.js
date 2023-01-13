import {
  // eslint-disable-next-line max-len
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack,
} from '@mui/material';
import { CalendarPicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DEADLINE, REPEAT } from '../../../utils/constants/repeat';
import { ADD_SCHEDULE } from '../../../utils/constants/schedule';

function RepeatInput({
  schedule, updateRepeat, openDatePickerModal, handleModalClose, repeatEndDate, setRepeatEndDate,
}) {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', marginTop: 1 }}
      >
        <FormControl fullWidth size="small">
          <InputLabel>{ADD_SCHEDULE.repeating_cycle}</InputLabel>
          <Select
            name="repeating_cycle"
            value={schedule.repeating_cycle}
            label={ADD_SCHEDULE.repeating_cycle}
            onChange={updateRepeat}
          >
            {REPEAT.map((r) => (<MenuItem id="repeating_cycle" value={r}>{r}</MenuItem>))}
          </Select>
        </FormControl>

        <FormControl
          fullWidth
          size="small"
          disabled={schedule.repeating_cycle === '없음'}
        >
          <InputLabel>{ADD_SCHEDULE.repeat_deadline}</InputLabel>
          <Select
            name="repeat_deadline"
            value={schedule.repeat_deadline === '캘린더에 표시' ? schedule.repeat_endDate : schedule.repeat_deadline}
            label={ADD_SCHEDULE.repeat_deadline}
            onChange={updateRepeat}
          >
            {DEADLINE.map((d) => (<MenuItem value={d}>{d}</MenuItem>))}
            <MenuItem disabled value={schedule.repeat_endDate}>{schedule.repeat_endDate}</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Dialog
        open={openDatePickerModal}
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '.MuiDialogContent-root': {
            padding: 0,
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          날짜 선택
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <CalendarPicker
              date={repeatEndDate}
              onChange={(newDate) => setRepeatEndDate(newDate)}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} autoFocus>
            설정
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RepeatInput;
