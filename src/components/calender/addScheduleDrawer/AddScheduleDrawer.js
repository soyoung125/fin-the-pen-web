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
import { addSchedule, selectDate } from '../../../utils/redux/schedule/scheduleSlice';
import SpendingInput from './SpendingInput';
import ImportanceInput from './ImportanceInput';
import ExclusionInput from './ExclusionInput';

function AddScheduleDrawer({ setBottomDrawerOpen }) {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  const [schedule, setSchedule] = useState({
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
    setSchedule({ ...schedule, date: date.format('YYYY-MM-DD') });
  }, [date]);

  const updateSchedule = (state) => {
    setSchedule({ ...schedule, [state.target.id]: state.target.value });
    console.log(schedule);
  };

  const updateExclusion = (state) => {
    setSchedule({ ...schedule, exclusion: state.target.checked });
    console.log(state.target.checked);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack
      justifyContent="space-between"
      spacing={2}
      m={1}
    >
      <Stack direction="row" justifyContent="space-between">
        <Button />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.drawer_title}</Typography>
        <Button onClick={() => setBottomDrawerOpen(false)}><ClearIcon /></Button>
      </Stack>
      <NameInput schedule={schedule} updateSchedule={updateSchedule} />
      <DateInput schedule={schedule} updateSchedule={updateSchedule} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.category_title}</Typography>
        <Button>{ADD_SCHEDULE.add_category}</Button>
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
          <Typography sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.set_finance_title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Card>
              <SpendingInput schedule={schedule} updateSchedule={updateSchedule} />
            </Card>
            <Card>
              <ImportanceInput schedule={schedule} updateSchedule={updateSchedule} />
            </Card>
            <Card>
              <ExclusionInput schedule={schedule} updateExclusion={updateExclusion} />
            </Card>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          dispatch(addSchedule(schedule));
          setBottomDrawerOpen(false);
        }}
      >
        Create Event & Wise Spend
      </Button>
    </Stack>
  );
}
export default AddScheduleDrawer;
