import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Slide,
  Snackbar,
  Stack, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import NameInput from './NameInput';
import DateInput from './DateInput';
import ADD_SCHEDULE from '../../../utils/constants/schedule';
import { addSchedule, selectDate } from '../../../utils/redux/schedule/scheduleSlice';
import SpendingInput from './SpendingInput';
import ImportanceInput from './ImportanceInput';
import ExclusionInput from './ExclusionInput';
import CategoryInput from './CategoryInput';

function TransitionUp(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide {...props} direction="right" />;
}

function AddScheduleDrawer({ setBottomDrawerOpen }) {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  const [schedule, setSchedule] = useState({
    event_name: '',
    date: new Date(),
    start_time: '01:00',
    end_time: '23:00',
    categories: [],
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

  const updateCategories = (categories) => {
    setSchedule({ ...schedule, categories: categories.map((c) => c.title) });
  };

  const updateExclusion = (state) => {
    setSchedule({ ...schedule, exclusion: state.target.checked });
    console.log(state.target.checked);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        open={snackbarOpen}
        onClose={handleClose}
        message="경고! 자산이 거의 남지 않았습니다."
        TransitionComponent={TransitionUp}
      />
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

        <CategoryInput updateCategories={updateCategories} />

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
            alert(JSON.stringify(schedule));
            dispatch(addSchedule(schedule));
            setBottomDrawerOpen(false);
          }}
        >
          Create Event & Wise Spend
        </Button>
      </Stack>
    </>
  );
}
export default AddScheduleDrawer;
