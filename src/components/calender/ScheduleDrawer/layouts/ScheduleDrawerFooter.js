/* eslint-disable no-unused-vars */
import { Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { NEED_SIGN_IN, NOT_AVAILABLE } from '../../../../utils/constants/common';
import { NEED_TITLE, SCHEDULE_DRAWER } from '../../../../utils/constants/schedule';
import { selectGuestMode } from '../../../../utils/redux/common/commonSlice';
import { selectSchedule } from '../../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../../utils/redux/user/userSlice';
import DeprecatedButton from './DeprecatedButton';

function ScheduleDrawerFooter({ mode, setBottomDrawerOpen }) {
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const schedule = useSelector(selectSchedule);
  // guest mode start
  const guestHandler = () => {
    alert(`[${mode}] 게스트 모드는 아직 기능을 연결하지 않았습니다. 기존 버튼을 이용해주세요`);
  };
  // guest mode end

  // fetch mode start
  const fetchHandler = () => {
    alert(`일반 모드! ${mode}`);
    switch (mode) {
      case 'create':
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
    if (guestMode) {
      guestHandler();
    } else {
      fetchHandler();
    }
  };

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <DeprecatedButton
        mode={mode}
        setBottomDrawerOpen={setBottomDrawerOpen}
      />

      <Button
        variant="contained"
        color="warning"
        fullWidth
        disabled={user === null}
        onClick={() => handleSubmit()}
      >
        { user === null
          ? NEED_SIGN_IN
          : `${SCHEDULE_DRAWER.add_schedule[mode]} (fetch)`}
      </Button>
    </Stack>
  );
}

export default ScheduleDrawerFooter;
