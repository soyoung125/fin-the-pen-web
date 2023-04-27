import {
  Box, Stack,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import RoundedPaper from '../../common/RoundedPaper';
import { AssetManagement } from '../../../domain/constants/managements';

interface SettingCardProps {
  setting: AssetManagement;
}
function SettingCard({ setting }: SettingCardProps) {
  const navigate = useNavigate();

  return (
    <RoundedPaper my={1}>
      <Box onClick={() => navigate(setting.path)}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ fontWeight: 'bold' }}>{setting.title}</Box>
          <KeyboardArrowRightIcon />
        </Stack>
      </Box>
    </RoundedPaper>
  );
}

export default SettingCard;
