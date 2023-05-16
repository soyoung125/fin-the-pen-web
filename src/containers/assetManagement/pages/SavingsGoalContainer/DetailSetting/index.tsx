import {
  Box, Typography,
} from '@mui/material';
import PrioritySetting from './PrioritySetting';
import RemittanceSetting from './RemittanceSetting';
import PopupSetting from './PopupSetting';

function DetailSetting() {
  return (
    <Box sx={{ pt: 3, px: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>저축 세부 설정</Typography>

      <PrioritySetting />

      <RemittanceSetting />

      <RemittanceSetting />

      <PopupSetting />
    </Box>
  );
}

export default DetailSetting;
