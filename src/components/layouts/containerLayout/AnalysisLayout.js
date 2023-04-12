import {
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import EasyAuthentication from '../../../containers/sign/EasyAuthentication';
import { selectIsAuthenticated, setIsAuthenticatedFalse } from '../../../utils/redux/common/commonSlice';
import AnalysisHeader from '../../analysis/AnalysisHeader';
import { selectedDate } from '../../../domain/redux/schedule/scheduleSlice';

function AnalysisLayout() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsAuthenticatedFalse());
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
