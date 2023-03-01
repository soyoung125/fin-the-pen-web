import { Box, Divider } from '@mui/material';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleViewMode from './layout/ScheduleViewMode';
import useHeader from '../../../utils/hooks/useHeader';
import { selectGuestMode, selectIsAuthenticated, setIsAuthenticatedFalse } from '../../../utils/redux/common/commonSlice';
import {
  getMonthSchedules, selectDate, selectViewMode, changeViewMode,
} from '../../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../../utils/redux/user/userSlice';
import EasyAuthentication from '../../sign/EasyAuthentication';
import Calender from './view/Calender';
import ScheduleList from './view/ScheduleList';
import AssetPreview from './view/AssetPreview';
import ConsumptionAlert from './layout/ConsumptionAlert';

function HomeConatiner() {
  const dispatch = useDispatch();
  const viewMode = useSelector(selectViewMode);
  const date = useSelector(selectDate);
  const user = useSelector(selectUser);
  const guestMode = useSelector(selectGuestMode);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    dispatch(changeViewMode('schedule'));
    dispatch(setIsAuthenticatedFalse());
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

  return (
    <Box>
      <ConsumptionAlert />
      {viewMode === 'schedule' ? (
        <>
          <Calender dateHeight={50} />
          <Divider />
          <ScheduleList />
        </>
      ) : (
        <>
          <EasyAuthentication />
          {/* isAuthenticated을 AssetPreview 내부에서 하는건 가독성이 떨어질까? */}
          {isAuthenticated && <AssetPreview />}
        </>
      )}
      <ScheduleViewMode />
    </Box>
  );
}
export default HomeConatiner;
