import { Button, Stack, Tooltip } from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NEED_SIGN_IN, NOT_AVAILABLE } from '../../../../utils/constants/common';
import {
  NEED_TITLE, REPEAT_CYCLE, SCHEDULE_DRAWER,
} from '../../../../utils/constants/schedule';
import { selectGuestMode } from '../../../../utils/redux/common/commonSlice';
import {
  // createNewSchedule,
  createSchedule, getMonthSchedules,
  // mockCreateNewSchedule,
  modifySchedule, selectDate, selectSchedule,
} from '../../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../../utils/redux/user/userSlice';

/**
 * 각종 로직들 모듈로 이전 예정
 */

function ScheduleDrawerFooter({ mode, setBottomDrawerOpen }) {
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const schedule = useSelector(selectSchedule);
  const dispatch = useDispatch();

  const createHandler = async () => {
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
        await dispatch(createSchedule({
          ...scheduleWithUuid,
          id: uuidv4(),
          date: repeatDate.format('YYYY-MM-DD'),
        }));
        repeatDate = moment(repeatDate).add(1, REPEAT_CYCLE[schedule.repeating_cycle]);
      }
    }
    // 원래 일정 추가
    await dispatch(createSchedule(scheduleWithUuid));
    if (!guestMode) { // 게스트 모드가 아니라면, 현재 서버 상태를 새롭게 요청하기
      dispatch(getMonthSchedules({
        user_id: user.user_id,
        date: moment(date).format('YYYY-MM'),
      }));
    }
    setBottomDrawerOpen(false);
  };

  const modifyHandler = async () => {
    if (guestMode) {
      dispatch(modifySchedule(schedule));
      setBottomDrawerOpen(false);
    } else {
      alert(NOT_AVAILABLE);
    }
  };

  const modeHandler = () => {
    switch (mode) {
      case 'create':
        createHandler();
        break;
      case 'modify':
        modifyHandler();
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
    modeHandler();
  };

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <Tooltip
        title={!guestMode && '아직 일반 모드에서는 동작하지 않습니다.'}
        placement="top"
      >
        <Button
          variant="contained"
          fullWidth
          disabled={user === null}
          onClick={() => handleSubmit()}
        >
          {user === null
            ? NEED_SIGN_IN
            : `${SCHEDULE_DRAWER.add_schedule[mode]}`}
        </Button>
      </Tooltip>
    </Stack>
  );
}

export default ScheduleDrawerFooter;
