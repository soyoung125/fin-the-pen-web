import { Button, Stack, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NEED_SIGN_IN, NOT_AVAILABLE } from '../../../../domain/constants/messages';
import {
  NEED_TITLE, SCHEDULE_DRAWER,
} from '../../../../utils/constants/schedule';
import { selectGuestMode } from '../../../../utils/redux/common/commonSlice';
import {
  // mockCreateNewSchedule,
  modifySchedule, selectDate, selectSchedule, setDrawerSchedule,
} from '../../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../../utils/redux/user/userSlice';
import { generateRandomSchedule, handleCreate } from '../domain/schedule';

/**
 * 각종 로직들 모듈로 이전 예정
 */

function ScheduleDrawerFooter({ mode, handleClose }) {
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const schedule = useSelector(selectSchedule);
  const dispatch = useDispatch();

  const handleModify = async () => {
    /**
     * 함수 완성되면 그 때 외부 모듈로 분리하겠습니다.
     */
    if (guestMode) {
      dispatch(modifySchedule(schedule));
      handleClose();
    } else {
      alert(NOT_AVAILABLE);
    }
  };

  const handleMode = () => {
    switch (mode) {
      case 'create':
        handleCreate(dispatch, schedule, user, guestMode, date, handleClose);
        break;
      case 'modify':
        handleModify();
        break;
      default:
        alert('잘못 된 요청입니다.');
    }
  };

  const handleSubmit = () => {
    if (schedule.event_name.length === 0) {
      alert(NEED_TITLE);
      return;
    }
    handleMode();
  };

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      {
        mode === 'create' && (
          <Button
            fullWidth
            variant="contained"
            color="warning"
            onClick={() => dispatch(setDrawerSchedule(generateRandomSchedule(date)))}
          >
            랜덤 데이터 채우기
          </Button>

        )
      }
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
