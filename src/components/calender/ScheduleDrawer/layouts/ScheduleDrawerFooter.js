/* eslint-disable no-unused-vars */
import { Button, Stack } from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NEED_SIGN_IN, NOT_AVAILABLE } from '../../../../utils/constants/common';
import {
  NEED_TITLE, REPEAT_CYCLE, SCHEDULE_DRAWER, SCHEDULE_DRAWER_MODE,
} from '../../../../utils/constants/schedule';
import { fetchCreateSchedule } from '../../../../utils/redux/API';
import { selectGuestMode } from '../../../../utils/redux/common/commonSlice';
import { addSchedule, modifySchedule, selectSchedule } from '../../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../../utils/redux/user/userSlice';
import { executeFunctionByGuestMode } from '../../../../utils/tools';
import DeprecatedButton from './DeprecatedButton';

/**
 * 각종 로직들 모듈로 이전 예정
 */

function ScheduleDrawerFooter({ mode, setBottomDrawerOpen }) {
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
        dispatch(addSchedule({ ...schedule, id: uuidv4(), date: repeatDate.format('YYYY-MM-DD') }));
        repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      }
    }
    // 원래 일정 추가
    dispatch(addSchedule({ ...schedule, id: uuidv4() }));
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
    if (mode === SCHEDULE_DRAWER_MODE.생성) {
      addNewSchedule();
    } else {
      modifySelectedSchedule();
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
    alert(`일정을 저장합니다. 저장하려는 일정 데이터는 다음과 같습니다. ${JSON.stringify(scheduleWithUuid)}`);
    const result = await fetchCreateSchedule(scheduleWithUuid);
    console.log(result);
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
