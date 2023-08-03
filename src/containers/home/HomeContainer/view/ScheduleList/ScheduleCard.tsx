import {
  Box,
  Button,
  ButtonBase,
  CardActionArea,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from '@mui/icons-material/Lock';
import { grey } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { deleteSelectedSchedule } from "../../../../../domain/tools";
import { selectGuestMode, setBottomDrawerOpenFalse } from "../../../../../app/redux/slices/commonSlice";
import CategoryTypeBadge from "../../../../../components/common/CategoryTypeBadge";
import { Schedule } from "../../../../../types/schedule";
import { Category } from "../../../../../domain/constants/categories";
import { useAppDispatch, useAppSelector } from "../../../../../app/redux/hooks";
import { useState } from "react";
import { modifySchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { NOT_AVAILABLE } from "../../../../../domain/constants/messages";
import { selectIsBudgetHidden } from "../../../../../app/redux/slices/settingSlice";
import useModal from "../../../../../hooks/useModal";
import AlertModal from "../../../../../components/common/AlertModal";

interface ScheduleCardProps {
  schedule: Schedule;
  handleModal: (schedule: Schedule) => void;
  category: Category;
  openAuthenticationPage: () => void;
}

function ScheduleCard({ schedule, handleModal, category, openAuthenticationPage }: ScheduleCardProps) {
  const dispatch = useAppDispatch();
  const guestMode = useAppSelector(selectGuestMode);
  const recommendedSpendingAmount = 50000;
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const isSpend = schedule.type === '-';
  const isSameWithRecomend = +schedule.expected_spending === recommendedSpendingAmount;
  const color = isSpend ? '#5AC8FA' : '#FA5A5A';

  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal
  } = useModal();

  const handleClose = () => {
    dispatch(setBottomDrawerOpenFalse());
  };

  const handleModifyModal = () => {
    if(!isHideBudgetMode) {
      handleModal(schedule)
    }
  }

  const handleModify = async () => {
    /**
     * 함수 완성되면 그 때 외부 모듈로 분리하겠습니다.
     */
    if (guestMode) {
      dispatch(modifySchedule({ ...schedule, expected_spending: recommendedSpendingAmount }));
      handleClose();
    } else {
      alert(NOT_AVAILABLE);
    }
  };

  return (
    <>
      <Swiper slidesPerView="auto" className="mySwiper" initialSlide={1}>
        <SwiperSlide style={{ display: "flex", width: "auto", height: "auto" }}>
          <Button
            variant="contained"
            onClick={() =>
              deleteSelectedSchedule(dispatch, schedule, handleClose)
            }
          >
            <DeleteForeverIcon fontSize="large" />
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <CardActionArea onClick={() => handleModifyModal()}>
            <Box px={3} py={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <CategoryTypeBadge color={category.color} mr={2} />
                  <Typography variant="caption">{`${schedule.start_time} - ${schedule.end_time}`}</Typography>
                </Stack>
                {!isHideBudgetMode && isSpend && !isSameWithRecomend && <Box
                  sx={{
                    backgroundColor: "primary.main",
                    color: "#FFFFFF",
                    p: 1,
                    fontSize: "10px",
                    borderRadius: "10px",
                    textAlign: "end",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("소비추천금액 적용하기");
                    handleModify();
                  }}
                >
                  <Box>소비추천금액 {recommendedSpendingAmount.toLocaleString('ko-KR')}원</Box>
                </Box>}
              </Stack>
              <Stack
                direction="row"
                pl={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" noWrap>
                  {schedule.event_name}
                </Typography>

                {/* 색상은 실제 소비 내역 데이터 연동 후 바꿀 예정 */}
                {isHideBudgetMode ?
                  <Box
                    sx={{
                      p: 0.5,
                      position: 'relative',
                      overflow: 'visible',
                      borderRadius: 5,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openAlertModal();
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        filter: 'blur(10px)',
                        backgroundColor: 'primary.main',
                      }} />
                      <LockIcon />
                  </Box>
                  : <Typography sx={{ color: isSameWithRecomend ? color : grey[500] }}>
                  {`${schedule.type}${parseInt(
                    schedule.expected_spending,
                    10
                  ).toLocaleString("ko-KR")}`}
                </Typography>}
              </Stack>
            </Box>
          </CardActionArea>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", width: "auto", height: "auto" }}>
          <Button variant="contained" onClick={() => handleModifyModal()}>
            <SettingsIcon fontSize="large" />
          </Button>
        </SwiperSlide>
      </Swiper>

      <Divider />

      <AlertModal
        open={alertModalOpen}
        handleClose={closeAlertModal}
        handleClickYes={() => {
          openAuthenticationPage();
          closeAlertModal();
        } }
        mode="hideBudget"
      />
    </>
  );
}

export default ScheduleCard;
