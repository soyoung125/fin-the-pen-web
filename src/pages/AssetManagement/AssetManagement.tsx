/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { Alert, Box } from '@mui/material';
import moment from 'moment/moment';
import { useEffect } from 'react';
import ScheduleStatusCard from '../../components/assetManagement/ScheduleStatusCard';
import SettingsPaper from '../../components/assetManagement/SettingsPaper';
import { setIsAuthenticatedFalse } from '../../app/redux/slices/commonSlice';
import { selectUser } from '../../app/redux/slices/userSlice';
import useSchedule from '../../hooks/useSchedule';
import { useAppDispatch, useAppSelector } from '../../app/redux/hooks';
import useHeader from '../../hooks/useHeader';
import { HEADER_MODE } from '../../domain/constants/common';

function AssetManagement() {
  const dispatch = useAppDispatch();
  const { schedules } = useSchedule();
  const user = useAppSelector(selectUser);
  const today = moment();

  useHeader(true, HEADER_MODE.settings);

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

export default AssetManagement;
