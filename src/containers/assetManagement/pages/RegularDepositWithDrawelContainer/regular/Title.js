import {
  Box, Button, IconButton, Stack,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';
import PATH from '../../../../../utils/constants/path';

function Title({ type, title }) {
  const navigate = useNavigate();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row">
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: 5, minWidth: 0, width: '20px', height: '20px', marginY: 'auto', mr: 1,
          }}
        >
          {type}
        </Button>
        <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>{title}</Box>
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ color: 'primary.main' }}>
        <Box>총 n건</Box>
        <IconButton color="primary" onClick={() => navigate(PATH.regularDepositWithdrawalDetail, { state: { type } })}>
          <BorderColorIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Title;
