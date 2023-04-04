/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { Alert, Box } from '@mui/material';
import moment from 'moment/moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleStatusCard from '../../components/assetManagement/ScheduleStatusCard';
import SettingsPaper from '../../components/assetManagement/SettingsPaper';
import { setIsAuthenticatedFalse } from '../../utils/redux/common/commonSlice';
import { selectSchedules } from '../../utils/redux/schedule/scheduleSlice';
import { selectUser } from '../../utils/redux/user/userSlice';

function AssetManagementContainer() {
  const dispatch = useDispatch();
  const schedules = useSelector(selectSchedules);
  const user = useSelector(selectUser);
  const today = moment();

  useEffect(() => {
    dispatch(setIsAuthenticatedFalse());
  }, []);

  return (
    <Box sx={{ m: 3, wordBreak: 'keep-all' }}>
      {user
        ? (
          <>
            <Box sx={{ typography: 'h5', fontWeight: 'bold' }}>
              {`핀더팬과 함께 "${user.name}" 님의 자산과 일정을 관리하세요`}
            </Box>
            <SettingsPaper />

            <ScheduleStatusCard
              month={today.format('M월')}
              numberOfSchedule={schedules.filter((s) => today.isSame(s.date, 'month') && today.isSameOrBefore(s.date, 'day')).length}
            />

          </>
        ) : <Alert severity="error">로그인이 필요한 페이지입니다.</Alert>}
    </Box>
  );
}
export default AssetManagementContainer;
