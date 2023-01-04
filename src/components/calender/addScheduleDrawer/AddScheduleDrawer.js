import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Card,
  Chip,
  Stack, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import NameInput from './NameInput';
import DateInput from './DateInput';
import ADD_SCHEDULE from '../../../utils/constants/schedule';
import { NOT_AVAILABLE } from '../../../utils/constants/common';
import { addEvent, selectDate } from '../../../utils/redux/event/eventSlice';
import SpendingInput from './SpendingInput';
import ImportanceInput from './ImportanceInput';
import ExclusionInput from './ExclusionInput';

function AddEventDrawer({ setBottomDrawerOpen }) {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  const [event, setEvent] = useState({
    event_name: '',
    date: new Date(),
    start_time: '',
    end_time: '',
    type: ADD_SCHEDULE.type_minus,
    expected_spending: 0,
    importance: ADD_SCHEDULE.importance_middle,
    exclusion: false, // false면 포함
  });

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    setEvent({ ...event, date: date.format('YYYY-MM-DD') });
  }, [date]);

  const updateEvent = (state) => {
    setEvent({ ...event, [state.target.id]: state.target.value });
    console.log(event);
  };

  const updateExclusion = (state) => {
    setEvent({ ...event, exclusion: state.target.checked });
    console.log(state.target.checked);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack
      justifyContent="space-between"
      // alignItems="center"
      spacing={2}
      m={1}
    >
      <Stack direction="row" justifyContent="space-between">
        <Button />
        <Typography variant="h5">{ADD_SCHEDULE.drawer_title}</Typography>
        <Button onClick={() => setBottomDrawerOpen(false)}><ClearIcon /></Button>
      </Stack>
      <NameInput event={event} updateEvent={updateEvent} />
      <DateInput event={event} updateEvent={updateEvent} />

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
      <Alert severity="error">{NOT_AVAILABLE}</Alert>
      <Box>
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => <Chip key={num} label={num} variant="outlined" onDelete={handleDelete} sx={{ mr: 1, mb: 1 }} />)}
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
              <SpendingInput event={event} updateEvent={updateEvent} />
            </Card>
            <Card>
              <ImportanceInput event={event} updateEvent={updateEvent} />
            </Card>
            <Card>
              <ExclusionInput event={event} updateExclusion={updateExclusion} />
            </Card>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          dispatch(addEvent(event));
          setBottomDrawerOpen(false);
        }}
      >
        Create Event & Wise Spend
      </Button>
    </Stack>
  );
}
export default AddEventDrawer;
