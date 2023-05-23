import {
  Box, Button, CardActionArea, Divider, Stack, Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from '@mui/material/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { deleteSelectedSchedule } from '../../../../../domain/tools';
import { setBottomDrawerOpenFalse } from '../../../../../app/redux/slices/commonSlice';
import CategoryTypeBadge from '../../../../../components/common/CategoryTypeBadge';
import { Schedule } from '../../../../../types/schedule';
import { Category } from '../../../../../domain/constants/categories';
import { useAppDispatch } from '../../../../../app/redux/hooks';

interface ScheduleCardProps {
  schedule: Schedule;
  handleModal: (schedule: Schedule) => void;
  category: Category;
}

function ScheduleCard({ schedule, handleModal, category }: ScheduleCardProps) {
  const dispatch = useAppDispatch();

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
              {/* <Stack
                sx={{
                  backgroundColor: 'primary.main',
                  color: '#FFFFFF',
                  p: 1,
                  fontSize: 'smaller',
                  borderRadius: '10px',
                }}
              >
                <Box>소비추천금액</Box>
                <Box>8,000원</Box>
              </Stack> */}
              <Stack direction="row">
                <CategoryTypeBadge color={category.color} mr={2} />
                <Typography variant="caption">{`${schedule.start_time} - ${schedule.end_time}`}</Typography>
              </Stack>
              <Stack
                direction="row"
                pl={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h6"
                  noWrap
                >
                  {schedule.event_name}
                </Typography>

                <Box
                  sx={{
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    p: 1,
                    fontSize: '10px',
                    borderRadius: '10px',
                    textAlign: 'end',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('소비추천금액 적용하기');
                  }}
                >
                  <Box>소비추천금액</Box>
                  <Box>8,000원</Box>
                </Box>

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
