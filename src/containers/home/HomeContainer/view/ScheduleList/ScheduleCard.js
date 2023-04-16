import {
  Box, Button, CardActionArea, Divider, Stack, Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from '@mui/material/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { deleteSelectedSchedule } from '../../../../../domain/tools';
import { setBottomDrawerOpenFalse } from '../../../../../utils/redux/common/commonSlice';
import CategoryTypeBadge from '../../../../../components/common/CategoryTypeBadge';

function ScheduleCard({ schedule, handleModal, category }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setBottomDrawerOpenFalse());
  };

  return (
    <>
      <Swiper
        slidesPerView="auto"
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide style={{ display: 'flex', width: 'auto', height: 'auto' }}>
          <Button variant="contained" onClick={() => deleteSelectedSchedule(dispatch, schedule, handleClose)}>
            <DeleteForeverIcon fontSize="large" />
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <CardActionArea onClick={() => handleModal(schedule)}>
            <Box px={3} py={2}>
              <Stack direction="row">
                <CategoryTypeBadge color={category.color} mr={2} />
                <Typography variant="caption">{`${schedule.start_time} - ${schedule.end_time}`}</Typography>
              </Stack>
              <Stack
                direction="row"
                pl={1}
                pt={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h6"
                  noWrap
                >
                  {schedule.event_name}
                </Typography>
                {/* 색상은 실제 소비 내역 데이터 연동 후 바꿀 예정 */}
                <Typography sx={{ color: grey[500] }}>
                  {`${schedule.type}${parseInt(schedule.expected_spending, 10).toLocaleString('ko-KR')}`}
                </Typography>
              </Stack>
            </Box>
          </CardActionArea>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', width: 'auto', height: 'auto' }}>
          <Button variant="contained" onClick={() => handleModal(schedule)}>
            <SettingsIcon fontSize="large" />
          </Button>
        </SwiperSlide>
      </Swiper>

      <Divider />
    </>

  );
}

export default ScheduleCard;
