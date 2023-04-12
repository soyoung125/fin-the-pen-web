import {
  Box, Paper, Stack,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

function SettingCard({ setting }) {
  const navigatie = useNavigate();

  return (
    <Paper
      elevation={8}
      sx={{
        marginY: 1, padding: 2, borderRadius: 3,
      }}
    >
      <Box onClick={() => navigatie(setting.path)}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ fontWeight: 'bold' }}>{setting.title}</Box>
          <KeyboardArrowRightIcon />
        </Stack>
      </Box>
    </Paper>
  );
}

export default SettingCard;
