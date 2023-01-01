import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Chip,
  FormControl, InputAdornment, OutlinedInput, Stack, Switch, TextField, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AddEventModal() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ mx: 1 }}
    >
      <Typography>Add New Event</Typography>
      <FormControl fullWidth>
        <OutlinedInput
          id="outlined-basic"
          startAdornment={<InputAdornment position="start">Event Name</InputAdornment>}
        />
      </FormControl>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <TextField
          id="time"
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
        />
        <TextField
          id="time"
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
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Typography>Select Category</Typography>
        <Button>+ Add New</Button>
      </Stack>
      <Box>
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => <Chip label={num} variant="outlined" onDelete={handleDelete} sx={{ mr: 1, mb: 1 }} />)}
      </Box>
      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>자산 설정하기</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Card>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>금액 설정</Typography>
                <Stack direction="row" alignItems="center">
                  <Button>입금</Button>
                  <Button>출금</Button>
                  <TextField />
                  <Typography>원</Typography>
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>일정 중요도</Typography>
                <Stack direction="row" alignItems="center">
                  <Button>상</Button>
                  <Button>중</Button>
                  <Button>하</Button>
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>예산에서 제외</Typography>
                <Switch />
              </Stack>
            </Card>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained" fullWidth>Create Event & Wisw Spend</Button>
    </Stack>
  );
}
export default AddEventModal;
