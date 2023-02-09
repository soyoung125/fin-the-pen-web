/* eslint-disable no-unused-vars */
import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';

function DetailCard() {
  const [positionX, setPositionX] = useState(0);
  return (
    <Box
      onTouchStart={(e) => setPositionX(e.changedTouches[0].clientX)}
      onTouchMove={(e) => console.log(e.changedTouches[0].clientX - positionX)}
    >
      <RoundedBorderBox>
        <Stack direction="row" justifyContent="space-between">
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
    </Box>
  );
}

export default DetailCard;
