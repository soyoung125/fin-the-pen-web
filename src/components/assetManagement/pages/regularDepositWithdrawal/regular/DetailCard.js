import {
  Box, Stack,
} from '@mui/material';
import 'swiper/css';
import { useState } from 'react';
import RoundedBorderBox from '../../../../common/RoundedBorderBox';
import ModifyModal from './ModifyModal';

function DetailCard() {
  const [settingModalOpen, setSettingModalOpen] = useState(false);

  return (
    <Box>
      <RoundedBorderBox>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 2,
          }}
        >
          <Box>
            <Box sx={{ mb: 1 }}>매달 1일</Box>
            <Box>OO은행 월급</Box>
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <Box sx={{ mb: 1 }}>월급날</Box>
            <Box sx={{ color: 'primary.main' }}>xxxxxxx원</Box>
          </Box>
        </Stack>
      </RoundedBorderBox>

      <ModifyModal settingModalOpen={settingModalOpen} setSettingModalOpen={setSettingModalOpen} />
    </Box>
  );
}

export default DetailCard;
