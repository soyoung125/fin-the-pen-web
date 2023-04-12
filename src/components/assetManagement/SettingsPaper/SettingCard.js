import {
  Box, Stack,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import RoundedPaper from '../../common/RoundedPaper';

function SettingCard({ setting }) {
  const navigatie = useNavigate();

  return (
    <RoundedPaper my={1}>
      <Box onClick={() => navigatie(setting.path)}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ fontWeight: 'bold' }}>{setting.title}</Box>
          <KeyboardArrowRightIcon />
        </Stack>
      </Box>
    </RoundedPaper>
  );
}

export default SettingCard;
