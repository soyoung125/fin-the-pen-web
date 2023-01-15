/* eslint-disable no-nested-ternary */
import {
  Accordion, AccordionDetails, AccordionSummary, Alert,
  Button, Card, Slide, Snackbar, Stack, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import moment from 'moment';
import NameInput from './inputs/NameInput';
import DateInput from './inputs/DateInput';
import {
  ADD_SCHEDULE, NEED_TITLE, REPEAT_CYCLE,
} from '../../../utils/constants/schedule';
import { addSchedule } from '../../../utils/redux/schedule/scheduleSlice';
import SpendingInput from './inputs/SpendingInput';
import ImportanceInput from './inputs/ImportanceInput';
import ExclusionInput from './inputs/ExclusionInput';
import CategoryInput from './inputs/CategoryInput';
import ALERTS from '../../../utils/constants/alerts';
import RepeatInput from './inputs/RepeatInput';
import { selectUser } from '../../../utils/redux/user/userSlice';
import { NEED_SIGN_IN } from '../../../utils/constants/common';

function TransitionUp(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide {...props} direction="right" />;
}

function ScheduleDrawer({ setBottomDrawerOpen, data, mode }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // 추후 삭제 예정
  const random = Math.floor((Math.random() * 5));

  const [schedule, setSchedule] = useState(data);

  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);
  const [repeatEndDate, setRepeatEndDate] = useState('');
  const [useMode, setUseMode] = useState(mode);
  const [expandAccordion, setExpandAccordion] = useState(mode !== 'create');
  const [isDisable, setIsDisable] = useState(mode === 'read');

  useEffect(() => {
    setIsDisable(useMode === 'read');
  }, [useMode]);

  const updateSchedule = (state) => {
    setSchedule({ ...schedule, [state.target.id]: state.target.value });
  };

  const updateAlarm = () => {
    setSchedule({ ...schedule, alarm: !schedule.alarm });
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
  };

  const updateSpendingType = () => {
    if (schedule.type === ADD_SCHEDULE.type_plus) {
      setSchedule({ ...schedule, type: ADD_SCHEDULE.type_minus });
    } else {
      setSchedule({ ...schedule, type: ADD_SCHEDULE.type_plus });
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const handleModalClose = () => {
    setOpenDatePickerModal(false);
    setSchedule({ ...schedule, repeat_endDate: repeatEndDate.format('YYYY-MM-DD') });
  };

  const addNewSchedule = () => {
    if (schedule.event_name.length > 0 && mode === 'create') {
      // 반복 일정 추가
      if ((schedule.repeating_cycle !== '없음') && (schedule.repeat_deadline !== '없음')) {
        let repeatDate = moment(schedule.date).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
        while (moment(schedule.repeat_endDate).isSameOrAfter(repeatDate)) {
          dispatch(addSchedule({ ...schedule, date: repeatDate.format('YYYY-MM-DD') }));
          repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
        }
      }
      // 원래 일정 추가
      dispatch(addSchedule(schedule));
      setBottomDrawerOpen(false);
    } else {
      alert(NEED_TITLE);
    }
  };

  const cancleModify = () => {
    setSchedule(data);
    setUseMode('read');
  };

  const handleExpand = () => {
    setExpandAccordion(!expandAccordion);
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
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {useMode === 'modify'
            ? <Button onClick={() => cancleModify()}>취소</Button>
            : <Button />}
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.drawer_title[useMode]}</Typography>

          {isDisable
            ? <Button onClick={() => setUseMode('modify')}>수정</Button>
            : useMode === 'modify'
              ? <Button onClick={() => cancleModify()}>저장</Button>
              : <Button onClick={() => setBottomDrawerOpen(false)}><ClearIcon /></Button>}
        </Stack>
        <NameInput
          schedule={schedule}
          updateSchedule={updateSchedule}
          updateAlarm={isDisable ? undefined : updateAlarm}
          isDisable={isDisable}
        />
        <DateInput schedule={schedule} updateSchedule={updateSchedule} isDisable={isDisable} />

        <RepeatInput
          schedule={schedule}
          updateRepeat={updateRepeat}
          openDatePickerModal={openDatePickerModal}
          handleModalClose={handleModalClose}
          repeatEndDate={repeatEndDate}
          setRepeatEndDate={setRepeatEndDate}
          isDisable={isDisable}
        />

        <CategoryInput
          updateCategory={updateCategory}
          selected={useMode === 'create' ? null : schedule.category.title}
          isDisable={isDisable}
        />

        <Accordion sx={{ width: '100%' }} expanded={expandAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={() => handleExpand()}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: 'bold' }}>{ADD_SCHEDULE.set_finance_title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#F6F6F6' }}>
            <Stack spacing={1}>
              <Card>
                <SpendingInput
                  schedule={schedule}
                  updateSchedule={updateSchedule}
                  updateSpendingType={isDisable ? undefined : updateSpendingType}
                  mode={useMode}
                  isDisable={isDisable}
                />
              </Card>
              <Card>
                <ImportanceInput
                  schedule={schedule}
                  updateSchedule={updateSchedule}
                  isDisable={isDisable}
                />
              </Card>
              <Card>
                <ExclusionInput
                  schedule={schedule}
                  updateExclusion={updateExclusion}
                  isDisable={isDisable}
                />
              </Card>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Button
          variant="contained"
          fullWidth
          disabled={user === null || isDisable}
          onClick={() => addNewSchedule()}
        >
          {
            user === null ? NEED_SIGN_IN : ADD_SCHEDULE.add_schedule[useMode]
          }
        </Button>
      </Stack>
    </>
  );
}
export default ScheduleDrawer;
