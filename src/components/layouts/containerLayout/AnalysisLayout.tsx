import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';
import EasyAuthentication from '../../../containers/sign/EasyAuthentication';
import { selectIsAuthenticated, setIsAuthenticatedFalse } from '../../../app/redux/slices/commonSlice';
import AnalysisHeader from '../../../containers/analysis/AnalysisHeader';
import { selectedDate } from '../../../app/redux/slices/scheduleSlice';
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks';
import { selectIsBudgetHidden } from '../../../app/redux/slices/settingSlice';

function AnalysisLayout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isHideBudgetMode) {
      dispatch(setIsAuthenticatedFalse());
    }
    dispatch(selectedDate(moment(new Date())));
  }, []);

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && (
        <Box sx={{ mt: 2 }}>
          <AnalysisHeader />

          <Box sx={{ my: 3, wordBreak: 'keep-all', fontWeight: 'bold' }}>
            <Outlet />
          </Box>
        </Box>
      )}
    </>
  );
}

export default AnalysisLayout;
