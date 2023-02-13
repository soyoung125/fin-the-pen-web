import { Box, Button, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import RoundedBorderBox from '../../../../common/RoundedBorderBox';
import ModifyModal from './ModifyModal';

function SwipeableDetailCard({ data }) {
  const [settingModalOpen, setSettingModalOpen] = useState(false);

  return (
    <Box>
      <RoundedBorderBox>
        <Swiper
          slidesPerView="auto"
          className="mySwiper"
          initialSlide={1}
        >
          <SwiperSlide style={{ display: 'flex', width: 'auto', height: 'auto' }}>
            <Button variant="contained">
              <DeleteForeverIcon fontSize="large" />
            </Button>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide style={{ display: 'flex', width: 'auto', height: 'auto' }}>
            <Button variant="contained" onClick={() => setSettingModalOpen(true)}>
              <SettingsIcon fontSize="large" />
            </Button>
          </SwiperSlide>
        </Swiper>
      </RoundedBorderBox>

      <ModifyModal
        settingModalOpen={settingModalOpen}
        setSettingModalOpen={setSettingModalOpen}
        data={data}
      />
    </Box>
  );
}

export default SwipeableDetailCard;
