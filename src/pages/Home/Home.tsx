import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import { Box } from '@mui/material';
import {
  changeViewMode, getMonthSchedules, selectDate, selectViewMode
} from '../../app/redux/slices/scheduleSlice';
import { selectUser } from '../../app/redux/slices/userSlice';
import { selectGuestMode, setIsAuthenticatedFalse } from '../../app/redux/slices/commonSlice';
import useHeader from '../../hooks/useHeader';
import { HEADER_MODE } from '../../domain/constants/common';
import ConsumptionAlert from '../../containers/home/HomeContainer/layout/ConsumptionAlert';
import ScheduleViewMode from '../../containers/home/HomeContainer/layout/ScheduleViewMode';
import ScheduleView from '../../containers/home/ScheduleView';
import AssetView from '../../containers/home/AssetView';
import { VIEW_MODE } from '../../domain/constants/schedule';
import { useAppDispatch, useAppSelector } from '../../app/redux/hooks';

function Home() {
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector(selectViewMode);
  const date = useAppSelector(selectDate);
  const user = useAppSelector(selectUser);
  const guestMode = useAppSelector(selectGuestMode);

  useEffect(() => {
    dispatch(changeViewMode(VIEW_MODE.schedule));
    dispatch(setIsAuthenticatedFalse());
  }, []);

  useHeader(true, HEADER_MODE.home);

  const getSchedules = () => {
    if (user) { // type guard
      const query = {
        user_id: user.user_id,
        date: moment(date).format('YYYY-MM'),
      };
      // 버그 있을 수 있음
      dispatch(getMonthSchedules(query) as any); // any를 써야 redux createAsyncThunk에 넘길 수 있다고 함
    }
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
      {
        viewMode === VIEW_MODE.schedule && (
          <ScheduleView />
        )
      }
      {
        viewMode === VIEW_MODE.asset && (
          <AssetView />
        )
      }
      <ScheduleViewMode />
    </Box>
  );
}

export default Home;
