/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
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
import { v4 as uuidv4 } from 'uuid';
import NameInput from './inputs/NameInput';
import DateInput from './inputs/DateInput';
import {
  SCHEDULE_DRAWER, NEED_TITLE, REPEAT_CYCLE, SCHEDULE_DRAWER_MODE,
} from '../../../utils/constants/schedule';
import { addSchedule, deleteSchedule, modifySchedule } from '../../../utils/redux/schedule/scheduleSlice';
import SpendingInput from './inputs/SpendingInput';
import ImportanceInput from './inputs/ImportanceInput';
import ExclusionInput from './inputs/ExclusionInput';
import CategoryInput from './inputs/CategoryInput';
import ALERTS from '../../../utils/constants/alerts';
import RepeatInput from './inputs/RepeatInput';
import { selectUser } from '../../../utils/redux/user/userSlice';
import { NEED_SIGN_IN, NOT_AVAILABLE } from '../../../utils/constants/common';
import AssetSettings from './AssetSettings';

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

  const [useMode, setUseMode] = useState(mode);
  const [expandAccordion, setExpandAccordion] = useState(mode !== SCHEDULE_DRAWER_MODE.생성);

  const updateExclusion = (state) => {
    setSchedule({ ...schedule, exclusion: state.target.checked });
  };

  const updateSpendingType = () => {
    if (schedule.type === SCHEDULE_DRAWER.type_plus) {
      setSchedule({ ...schedule, type: SCHEDULE_DRAWER.type_minus });
    } else {
      setSchedule({ ...schedule, type: SCHEDULE_DRAWER.type_plus });
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const addNewSchedule = () => {
    // 반복 일정 추가
    if ((schedule.repeating_cycle !== '없음') && (schedule.repeat_deadline !== '없음')) {
      let repeatDate = moment(schedule.date).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      while (moment(schedule.repeat_endDate).isSameOrAfter(repeatDate)) {
        dispatch(addSchedule({ ...schedule, id: uuidv4(), date: repeatDate.format('YYYY-MM-DD') }));
        repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      }
    }
    // 원래 일정 추가
    dispatch(addSchedule({ ...schedule, id: uuidv4() }));
    setBottomDrawerOpen(false);
  };

  const deleteSelectedSchedule = () => {
    dispatch(deleteSchedule(schedule.id));
    setBottomDrawerOpen(false);
  };

  const modifySelectedSchedule = () => {
    dispatch(modifySchedule(schedule));
    setBottomDrawerOpen(false);
  };

  const handleExpand = () => {
    setExpandAccordion(!expandAccordion);
  };

  const handleSubmit = () => {
    if (schedule.event_name.length === 0) {
      alert(NEED_TITLE);
      return;
    }
    if (mode === SCHEDULE_DRAWER_MODE.생성) {
      addNewSchedule();
    } else {
      deleteSelectedSchedule();
    }
  };

  const handleSubmitByRedux = () => {
    alert(NOT_AVAILABLE);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        open={snackbarOpen}
        onClose={handleClose}
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
          {useMode === SCHEDULE_DRAWER_MODE.수정
            ? <Button onClick={() => setBottomDrawerOpen(false)}>취소</Button>
            : <Button />}
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{SCHEDULE_DRAWER.drawer_title[useMode]}</Typography>

          {useMode === SCHEDULE_DRAWER_MODE.수정
            ? <Button onClick={() => modifySelectedSchedule()}>저장</Button>
            : <Button onClick={() => setBottomDrawerOpen(false)}><ClearIcon /></Button>}
        </Stack>

        {/* 이벤트 제목 */}
        <NameInput
          schedule={schedule}
          setSchedule={setSchedule}
        />

        {/* 이벤트 일정 */}
        <DateInput
          schedule={schedule}
          setSchedule={setSchedule}
        />

        {/* 이벤트 반복 설정 */}
        <RepeatInput
          schedule={schedule}
          setSchedule={setSchedule}
        />

        {/* 이벤트 카테고리 */}
        <CategoryInput
          schedule={schedule}
          setSchedule={setSchedule}
          // updateCategory={updateCategory}
          selected={useMode === SCHEDULE_DRAWER_MODE.생성 ? null : schedule.category}
        />

        {/* 자산 설정하기 */}
        {mode === SCHEDULE_DRAWER_MODE.수정
          ? (
            <AssetSettings
              schedule={schedule}
              setSchedule={setSchedule}
              updateSpendingType={updateSpendingType}
              updateExclusion={updateExclusion}
              mode={useMode}
            />
          )
          : (
            <Accordion sx={{ width: '100%' }} expanded={expandAccordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={() => handleExpand()}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>{SCHEDULE_DRAWER.set_finance_title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F6F6F6' }}>
                <AssetSettings
                  schedule={schedule}
                  setSchedule={setSchedule}
                  updateSpendingType={updateSpendingType}
                  updateExclusion={updateExclusion}
                  mode={useMode}
                />
              </AccordionDetails>
            </Accordion>
          )}

        {/* 제출 버튼 */}
        <Stack
          direction="row"
          spacing={1}
        >
          <Button
            variant="contained"
            fullWidth
            disabled={user === null}
            onClick={() => handleSubmit()}
          >
            {
            user === null
              ? NEED_SIGN_IN
              : SCHEDULE_DRAWER.add_schedule[useMode]
          }
          </Button>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            disabled={user === null}
            onClick={() => handleSubmitByRedux()}
          >
            redux test
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
export default ScheduleDrawer;
