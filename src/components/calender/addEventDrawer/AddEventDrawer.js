import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Card,
  Chip,
  Stack, Switch, TextField, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import NameInput from './NameInput';
import DateInput from './DateInput';
import ADD_EVENT from '../../../utils/constants/event';
import { NOTHING_IS_AVAILABLE_BELOW_HERE } from '../../../utils/constants/common';

function AddEventDrawer() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  // eslint-disable-next-line no-unused-vars
  const [event, setEvent] = useState({
    name: '',
    date: new Date(),
    startTime: '',
    endTime: '',
  });

  const updateEvent = (state) => {
    setEvent({ ...event, [state.target.id]: state.target.value });
    console.log(event);
  };
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ mx: 1 }}
    >
      <Typography variant="h5">{ADD_EVENT.drawer_title}</Typography>
      <NameInput event={event} updateEvent={updateEvent} />
      <DateInput event={event} updateEvent={updateEvent} />
      <Alert severity="error">{NOTHING_IS_AVAILABLE_BELOW_HERE}</Alert>

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
export default AddEventDrawer;
