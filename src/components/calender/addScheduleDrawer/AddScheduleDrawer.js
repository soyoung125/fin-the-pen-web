import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
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
import ALERTS from '../../../utils/constants/alerts';
import RepeatInput from './RepeatInput';
import { selectUser } from '../../../utils/redux/user/userSlice';

function TransitionUp(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide {...props} direction="right" />;
}

function AddScheduleDrawer({ setBottomDrawerOpen }) {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);

  // 추후 삭제 예정
  const random = Math.floor((Math.random() * 5));

  const [schedule, setSchedule] = useState({
    event_name: '',
    alarm: false,
    date: new Date(),
    start_time: '09:00',
    end_time: '10:00',
    repeating_cycle: '없음',
    repeat_deadline: '없음',
    repeat_endDate: new Date(),
    category: {},
    type: ADD_SCHEDULE.type_minus,
    expected_spending: 0,
    importance: ADD_SCHEDULE.importance_middle,
    exclusion: false, // false면 포함
  });

  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);
  const [repeatEndDate, setRepeatEndDate] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    setSchedule({ ...schedule, date: date.format('YYYY-MM-DD'), repeat_endDate: date.format('YYYY-MM-DD') });
    setRepeatEndDate(date);
  }, [date]);

  const updateSchedule = (state) => {
    setSchedule({ ...schedule, [state.target.id]: state.target.value });
    console.log(schedule);
  };

  const updateAlarm = () => {
    setSchedule({ ...schedule, alarm: !schedule.alarm });
    console.log(schedule);
  };

  const updateRepeat = (state) => {
    if ((state.target.name === 'repeating_cycle') && (state.target.value === '없음')) {
      setSchedule({ ...schedule, [state.target.name]: state.target.value, repeat_deadline: '없음' });
    } else {
      setSchedule({ ...schedule, [state.target.name]: state.target.value });
    }
    if ((state.target.name === 'repeat_deadline') && (state.target.value !== '없음')) {
      setOpenDatePickerModal(true);
    }
  };

  const updateCategory = (category) => {
    setSchedule({ ...schedule, category });
  };

  const updateExclusion = (state) => {
    setSchedule({ ...schedule, exclusion: state.target.checked });
    console.log(state.target.checked);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const handleModalClose = () => {
    setOpenDatePickerModal(false);
    setSchedule({ ...schedule, repeat_endDate: repeatEndDate.format('YYYY-MM-DD') });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        open={snackbarOpen}
        onClose={handleClose}
        // message="경고! 자산이 거의 남지 않았습니다."
        TransitionComponent={TransitionUp}
      >
        <Alert color={ALERTS[random].color} sx={{ width: '100%' }} icon={ALERTS[random].icon}>
          {ALERTS[random].message}
        </Alert>
      </Snackbar>
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
        <NameInput schedule={schedule} updateSchedule={updateSchedule} updateAlarm={updateAlarm} />
        <DateInput schedule={schedule} updateSchedule={updateSchedule} />

        <RepeatInput
          schedule={schedule}
          updateRepeat={updateRepeat}
          openDatePickerModal={openDatePickerModal}
          handleModalClose={handleModalClose}
          repeatEndDate={repeatEndDate}
          setRepeatEndDate={setRepeatEndDate}
        />

        <CategoryInput updateCategory={updateCategory} />

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
          disabled={user === null}
          onClick={() => {
            if (schedule.event_name.length > 0) {
              dispatch(addSchedule(schedule));
              setBottomDrawerOpen(false);
            } else {
              alert('제목을 입력해야 합니다.');
            }
          }}
        >
          {
            user === null ? '로그인이 필요한 메뉴입니다.' : '일정 추가하기'
          }
        </Button>
      </Stack>
    </>
  );
}
export default AddScheduleDrawer;
