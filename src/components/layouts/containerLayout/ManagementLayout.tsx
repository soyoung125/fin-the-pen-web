/* eslint-disable max-len */
import {
  Box, Typography,
} from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import assetManagements from '../../../domain/constants/managements';
import SwitchingHeader from '../../common/SwitchingHeader';
import EasyAuthentication from '../../../containers/sign/EasyAuthentication';
import { selectIsAuthenticated } from '../../../app/redux/slices/commonSlice';
import { useAppSelector } from '../../../app/redux/hooks';

function ManagementLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [management, setManagement] = useState(0);

  useEffect(() => {
    setManagement(assetManagements.findIndex((s) => s.path === location.pathname));
  }, []);

  const handleMovement = (type: '+' | '-') => {
    console.log(assetManagements[management].title);
    if (type === '-' && management !== 0) {
      setManagement(management - 1);
      navigate(assetManagements[management - 1].path, { replace: true });
    } else if (type === '+' && management !== 3) {
      setManagement(management + 1);
      navigate(assetManagements[management + 1].path, { replace: true });
    }
  };

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && (
        <Box sx={{ pt: 3, px: 2 }}>
          <SwitchingHeader
            justifyContent="space-between"
            handleClickLeftArrow={() => handleMovement('-')}
            handleClickRightArrow={() => handleMovement('+')}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{assetManagements[management].title}</Typography>
          </SwitchingHeader>

          <Box sx={{ my: 3, wordBreak: 'keep-all', fontWeight: 'bold' }}>
            <Outlet />
          </Box>
        </Box>
      )}
    </>
  );
}

export default ManagementLayout;
