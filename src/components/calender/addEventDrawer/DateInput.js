import {
  Stack, TextField,
} from '@mui/material';

function DateInput({ event, updateEvent }) {
  return (
    <>
      <TextField
        id="date"
        label="Date"
        type="date"
        // defaultValue="2017-05-24"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={event.date}
        onChange={updateEvent}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <TextField
          id="startTime"
          label="Start Time"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
          value={event.startTime}
          onChange={updateEvent}
        />
        <TextField
          id="endTime"
          label="End Time"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
          value={event.endTime}
          onChange={updateEvent}
        />
      </Stack>
    </>

  );
}
export default DateInput;
