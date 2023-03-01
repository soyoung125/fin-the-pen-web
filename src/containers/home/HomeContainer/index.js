import {
  Alert, Box, Divider, Snackbar,
} from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleViewMode from './ScheduleViewMode';
import { CONSUMPTION_ALERTS } from '../../../utils/constants/alerts';
import useHeader from '../../../utils/hooks/useHeader';
import { selectGuestMode, selectIsAuthenticated } from '../../../utils/redux/common/commonSlice';
import {
  getMonthSchedules, selectDate, selectViewMode, changeViewMode,
} from '../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../utils/redux/user/userSlice';
import EasyAuthentication from '../../sign/EasyAuthentication';
import Calender from './Calender';
import ScheduleList from './ScheduleList';
import AssetManagement from './AssetManagement';

function HomeConatiner() {
  const dispatch = useDispatch();
  const viewMode = useSelector(selectViewMode);
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // 추후 삭제 예정
  const random = Math.floor((Math.random() * 5));
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  useEffect(() => {
    dispatch(changeViewMode('schedule'));
  }, []);

  useHeader(true, 'home');

  const getSchedules = () => {
    dispatch(getMonthSchedules({
      user_id: user.user_id,
      date: moment(date).format('YYYY-MM'),
    }));
  };

  useEffect(() => {
    // 게스트 모드가 아닌 경우에만 서버에 데이터를 요청
    if (user && !guestMode) {
      getSchedules();
    }
  }, [date]);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        open={snackbarOpen}
        onClose={handleClose}
      >
        <Alert color={CONSUMPTION_ALERTS[random].color} sx={{ width: '100%' }} icon={CONSUMPTION_ALERTS[random].icon}>
          {CONSUMPTION_ALERTS[random].message}
        </Alert>
      </Snackbar>
      {viewMode === 'schedule' ? (
        <>
          <Calender dateHeight={50} />
          <Divider />
          <ScheduleList />
        </>
      ) : (
        <>
          <EasyAuthentication />
          {/* isAuthenticated을 AssetManagement 내부에서 하는건 가독성이 떨어질까? */}
          {isAuthenticated && <AssetManagement />}
        </>
      )}
      <ScheduleViewMode />
    </Box>
  );
}
export default HomeConatiner;
