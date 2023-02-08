/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { Button, Stack } from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NEED_SIGN_IN, NOT_AVAILABLE } from '../../../../utils/constants/common';
import {
  NEED_TITLE, REPEAT_CYCLE, SCHEDULE_DRAWER, SCHEDULE_DRAWER_MODE,
} from '../../../../utils/constants/schedule';
import { selectGuestMode } from '../../../../utils/redux/common/commonSlice';
import {
  addSchedule, createNewSchedule, getMonthSchedules, modifySchedule, selectDate, selectSchedule,
} from '../../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../../utils/redux/user/userSlice';
import { executeFunctionByGuestMode } from '../../../../utils/tools';
import DeprecatedButton from './DeprecatedButton';

/**
 * 각종 로직들 모듈로 이전 예정
 */

function ScheduleDrawerFooter({ mode, setBottomDrawerOpen }) {
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const schedule = useSelector(selectSchedule);
  const dispatch = useDispatch();

  // guest mode start

  const addNewSchedule = () => {
    // 반복 일정 추가
    if ((schedule.repeating_cycle !== '없음') && (schedule.repeat_deadline !== '없음')) {
      let repeatDate = moment(schedule.date).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      while (moment(schedule.repeat_endDate).isSameOrAfter(repeatDate)) {
        dispatch(addSchedule({ ...schedule, id: uuidv4(), date: repeatDate.format('YYYY-MM-DD') })); // mock 함수로 이전 예정
        repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      }
    }
    // 원래 일정 추가
    dispatch(addSchedule({ ...schedule, id: uuidv4() })); // mock 함수로 이전 예정
    setBottomDrawerOpen(false);
  };

  const modifySelectedSchedule = () => {
    dispatch(modifySchedule(schedule));
    setBottomDrawerOpen(false);
  };

  const guestHandler = () => {
    alert(`[${mode}] 게스트 모드에서 동작!`);
    if (schedule.event_name.length === 0) {
      alert(NEED_TITLE);
      return;
    }
    switch (mode) {
      case 'create':
        addNewSchedule();
        break;
      case 'modify':
        modifySelectedSchedule();
        break;
      default:
        alert('잘못 된 요청입니다.');
    }
  };
  // guest mode end

  // fetch mode start

  const createSchedule = async () => {
    const scheduleWithUuid = {
      ...schedule,
      id: uuidv4(),
      user_id: user.user_id,
    };
    // 반복 일정 추가
    if ((schedule.repeating_cycle !== '없음') && (schedule.repeat_deadline !== '없음')) {
      let repeatDate = moment(schedule.date).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      while (moment(schedule.repeat_endDate).isSameOrAfter(repeatDate)) {
        // eslint-disable-next-line no-await-in-loop
        await dispatch(createNewSchedule({
          ...scheduleWithUuid,
          id: uuidv4(),
          date: repeatDate.format('YYYY-MM-DD'),
        }));
        repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      }
    }
    // 원래 일정 추가
    await dispatch(createNewSchedule(scheduleWithUuid));
    dispatch(getMonthSchedules({ // 이 부분이 createNewSchedule 내부에 통합될 수 있을까?
      user_id: user.user_id,
      date: moment(date).format('YYYY-MM'),
    }));
    setBottomDrawerOpen(false);
  };

  const fetchHandler = () => {
    alert(`일반 모드! ${mode}`);
    switch (mode) {
      case 'create':
        createSchedule();
        break;
      case 'modify':
        alert(NOT_AVAILABLE);
        break;
      default:
        alert('잘못 된 요청입니다.');
    }
  };
  // fetch mode end

  const handleSubmit = () => {
    if (schedule.event_name.length === 0) {
      alert(NEED_TITLE);
      return;
    }
    executeFunctionByGuestMode(guestMode, guestHandler, fetchHandler);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      {/* <DeprecatedButton
        mode={mode}
        setBottomDrawerOpen={setBottomDrawerOpen}
      /> */}

      <Button
        variant="contained"
        // color="warning"
        fullWidth
        disabled={user === null}
        onClick={() => handleSubmit()}
      >
        {user === null
          ? NEED_SIGN_IN
          : `${SCHEDULE_DRAWER.add_schedule[mode]}`}
      </Button>
    </Stack>
  );
}

export default ScheduleDrawerFooter;
