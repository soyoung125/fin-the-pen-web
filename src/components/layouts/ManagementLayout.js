import {
  Box, IconButton, Stack, Typography,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import momeyManagementSettings from '../../utils/constants/settings';

function ManagementLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [management, setManagement] = useState(0);

  useEffect(() => {
    setManagement(momeyManagementSettings.findIndex((s) => s.path === location.pathname));
  }, []);

  const handleMovement = (type) => {
    if (type === '-' && management !== 0) {
      setManagement(management - 1);
      navigate(momeyManagementSettings[management - 1].path, { replace: true });
    } else if (type === '+' && management !== 3) {
      setManagement(management + 1);
      navigate(momeyManagementSettings[management + 1].path, { replace: true });
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} my={5} sx={{ height: '30px' }}>
        <IconButton
          aria-label="delete"
          sx={{
            padding: '5px', marginRight: '-3px', border: '1px solid', borderRadius: 2,
          }}
          onClick={() => handleMovement('-')}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Stack alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{momeyManagementSettings[management].title}</Typography>
        </Stack>
        <IconButton
          aria-label="delete"
          sx={{
            padding: '5px', marginLeft: '-3px', border: '1px solid', borderRadius: 2,
          }}
          onClick={() => handleMovement('+')}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>

      <Box sx={{ m: 3, wordBreak: 'keep-all' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default ManagementLayout;
