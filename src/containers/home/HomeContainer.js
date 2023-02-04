/* eslint-disable no-unused-vars */
import {
  Alert, Box, Divider, Snackbar,
} from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calender from '../../components/calender/Calender';
import MonthlyStatement from '../../components/calender/MonthlyStatement.js';
import ScheduleList from '../../components/calender/scheduleList/ScheduleList';
import ScheduleViewMode from '../../components/calender/ScheduleViewMode';
import ALERTS from '../../utils/constants/alerts';
import { fetchSchedules } from '../../utils/redux/API';
import { selectGuestMode, setHeaderOpenTrue } from '../../utils/redux/common/commonSlice';
import {
  changeViewMode, selectDate, selectViewMode, setSchedules,
} from '../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../utils/redux/user/userSlice';

function HomeConatiner() {
  const dispatch = useDispatch();
  const viewMode = useSelector(selectViewMode);
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);

  // 추후 삭제 예정
  const random = Math.floor((Math.random() * 5));
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  useEffect(() => {
    dispatch(setHeaderOpenTrue('home'));
    dispatch(changeViewMode('asset'));
  }, []);

  const getSchedules = async () => {
    console.log('전체 데이터를 수신할 위치');
    const result = await fetchSchedules(user.user_id);
    console.log(result);
    dispatch(setSchedules(result));
  };

  useEffect(() => {
    console.log(moment(date).format('YYYY-MM'));

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
        <Alert color={ALERTS[random].color} sx={{ width: '100%' }} icon={ALERTS[random].icon}>
          {ALERTS[random].message}
        </Alert>
      </Snackbar>
      {viewMode === 'schedule'
        ? (
          <>
            <Calender dateHeight={50} />
            <Divider />
            <ScheduleList />
          </>
        )
        : (
          <>
            <MonthlyStatement />
            <Calender dateHeight={85} />
          </>
        )}
      <ScheduleViewMode />
    </Box>
  );
}
export default HomeConatiner;
