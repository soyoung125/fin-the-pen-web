/* eslint-disable no-restricted-globals */
import {
  Box, Button, Stack, Typography
} from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PATH from '../../domain/constants/path';
import { selectGuestMode } from '../../app/redux/slices/commonSlice';
import { selectUser } from '../../app/redux/slices/userSlice';
import GuestDataManager from '../../containers/test/GuestDataManager';
import GuestMode from '../../containers/test/GuestMode';
import SchedulesData from '../../containers/test/SchedulesData';
import ScheduleFilterData from '../../containers/test/ScheduleFilterData';
import UserData from '../../containers/test/UserData';
import ScheduleData from '../../containers/test/ScheduleData';

function MyPage() {
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const navigate = useNavigate();
  const userLogOut = () => {
    if (
      confirm(
        '게스트 계정은 로그아웃 하는 경우 지금까지 작업한 내용이 저장되지 않습니다. 중요한 자료는 미리 백업해주세요. (확인 시 모든 정보 날라감)'
      )
    ) {
      sessionStorage.clear();
      window.location.href = '';
      /**
       * logOut을 dispatch하지 않고, redux 스토어를 강제로 비워서 초기화 처리해버리는 중
       */
    }
  };
  useEffect(() => {
    // 로그인 안된 계정은 로그인 페이지로 강제연결
    if (user === null) {
      navigate(PATH.signIn);
    }
  }, [user]);

  return (
    <Box>
      {guestMode ? (
        <GuestDataManager />
      ) : (
        <Stack spacing={2} m={2} border={1} p={2}>
          <Typography>현재 작업한 내용은 모두 서버에 저장중입니다.</Typography>
        </Stack>
      )}
      <Box m={2}>
        <Button variant="contained" color="error" onClick={() => userLogOut()}>
          로그아웃
        </Button>
      </Box>

      <GuestMode />
      <UserData />
      <ScheduleData />
      <SchedulesData />
      <ScheduleFilterData />
    </Box>
  );
}

export default MyPage;
