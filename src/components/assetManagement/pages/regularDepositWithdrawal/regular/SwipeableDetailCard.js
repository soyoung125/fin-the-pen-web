import { Box, Button, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import moment from 'moment';
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
              spacing={5}
              sx={{
                px: 2, py: 3,
              }}
            >
              <Box>
                <Box sx={{ mb: 3 }}>{`매${data.repeating_cycle.charAt(0)} ${moment(data.date).format('D일')}`}</Box>
                <Box>{data.event_name}</Box>
              </Box>
              <Box sx={{ textAlign: 'end' }}>
                <Box sx={{ mb: 3 }}>{data.event_name}</Box>
                <Box sx={{ color: 'primary.main' }}>{`${parseInt(data.expected_spending, 10).toLocaleString('ko-kr')}원`}</Box>
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
