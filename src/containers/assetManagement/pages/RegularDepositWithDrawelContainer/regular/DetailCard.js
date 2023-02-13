import { Box, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import RoundedBorderBox from '../../../../../components/common/RoundedBorderBox';

function DetailCard() {
  return (
    <Box>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide style={{ display: 'flex', width: 'auto' }}>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide style={{ display: 'flex', width: 'auto' }}>Slide 3</SwiperSlide>
      </Swiper>
      <RoundedBorderBox>
        <Stack direction="row" sx={{ width: '100%' }}>
          <Box sx={{ width: 0 }}>delete</Box>
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
        </Stack>
      </RoundedBorderBox>
    </Box>
  );
}

export default DetailCard;
