import { Box, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';

function DetailCard() {
  return (
    <Box>
      <RoundedBorderBox>
        <Swiper
          slidesPerView="auto"
          className="mySwiper"
          initialSlide={1}
        >
          <SwiperSlide style={{ display: 'flex', width: 'auto' }}>
            <Box>delete</Box>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide style={{ display: 'flex', width: 'auto' }}>
            <Box sx={{ width: 0 }}>modify</Box>
          </SwiperSlide>
        </Swiper>
      </RoundedBorderBox>
    </Box>
  );
}

export default DetailCard;
