import { Box, Button, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import RoundedBorderBox from '../../../../common/RoundedBorderBox';
import ModifyModal from './ModifyModal';
import AlertModal from '../../../../common/AlertModal';
import { deleteSelectedSchedule } from '../../../../../utils/tools';

function SwipeableDetailCard({ data }) {
  const dispatch = useDispatch();
  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);

  console.log(data);
  const handleCloseAlert = () => {
    setOpenAlertModal(false);
  };

  return (
    <Box mb={1}>
      <RoundedBorderBox>
        <Swiper
          slidesPerView="auto"
          className="mySwiper"
          initialSlide={1}
        >
          <SwiperSlide style={{ display: 'flex', width: 'auto', height: 'auto' }}>
            <Button variant="contained" onClick={() => setOpenAlertModal(true)}>
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

      <AlertModal
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => deleteSelectedSchedule(dispatch, data, handleCloseAlert)}
        mode="delete"
      />
    </Box>
  );
}

export default SwipeableDetailCard;
