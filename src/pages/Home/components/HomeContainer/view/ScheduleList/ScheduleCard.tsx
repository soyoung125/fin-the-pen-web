import {
  Box,
  Button,
  CardActionArea,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import { grey } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryTypeBadge from "@components/common/CategoryTypeBadge.tsx";
import { Schedule } from "@app/types/schedule.ts";
import { Category } from "@constants/categories.ts";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";
import useModal_deprecated from "@hooks/useModal_deprecated.ts";
import AlertModal from "@components/common/AlertModal.tsx";
import useSchedule from "@hooks/useSchedule.ts";

interface ScheduleCardProps {
  schedule: Schedule;
  handleModal: (schedule: Schedule) => void;
  category: Category;
  openAuthenticationPage: () => void;
}

function ScheduleCard({
  schedule,
  handleModal,
  category,
  openAuthenticationPage,
}: ScheduleCardProps) {
  const dispatch = useAppDispatch();
  const recommendedSpendingAmount = 50000;
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const isSpend = schedule.price_type === "-";
  const isSameWithRecommend = +schedule.amount === recommendedSpendingAmount;
  const color = isSpend ? "#5AC8FA" : "#FA5A5A";

  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal_deprecated();

  const { handleDeleteSchedule, handleModifySchedule } = useSchedule();

  const handleModifyModal = () => {
    if (!isHideBudgetMode) {
      handleModal(schedule);
    }
  };

  return (
    <>
      <Swiper slidesPerView="auto" className="mySwiper" initialSlide={1}>
        <SwiperSlide style={{ display: "flex", width: "auto", height: "auto" }}>
          <Button
            variant="contained"
            onClick={() => {
              // handleDeleteSchedule(schedule.id as string);
            }}
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
                {!isHideBudgetMode && isSpend && !isSameWithRecommend && (
                  <Box
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
                      handleModifySchedule(schedule);
                    }}
                  >
                    <Box>
                      소비추천금액{" "}
                      {recommendedSpendingAmount.toLocaleString("ko-KR")}원
                    </Box>
                  </Box>
                )}
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
                {isHideBudgetMode ? (
                  <Box
                    sx={{
                      p: 0.5,
                      position: "relative",
                      overflow: "visible",
                      borderRadius: 5,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openAlertModal();
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        filter: "blur(10px)",
                        backgroundColor: "primary.main",
                      }}
                    />
                    <LockIcon />
                  </Box>
                ) : (
                  <Typography
                    sx={{ color: isSameWithRecommend ? color : grey[500] }}
                  >
                    {`${schedule.price_type}${parseInt(
                      schedule.amount,
                      10
                    ).toLocaleString("ko-KR")}`}
                  </Typography>
                )}
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
        }}
        mode="hideBudget"
      />
    </>
  );
}

export default ScheduleCard;
