/* eslint-disable array-callback-return */
import { Box, Button, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import moment from "moment";
import ModifyModal from "./ModifyModal";
import RoundedBorderBox from "../../../../../components/common/RoundedBorderBox";
import AlertModal from "../../../../../components/common/AlertModal";
import { Schedule } from "@app/types/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import useModal_deprecated from "@hooks/useModal_deprecated.ts";
import useSchedule from "@hooks/useSchedule.ts";

interface SwipeableDetailCardProps {
  data: Schedule[];
}

function SwipeableDetailCard({ data }: SwipeableDetailCardProps) {
  const dispatch = useAppDispatch();
  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const schedule = data[0];
  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal_deprecated();
  const { handleDeleteSchedule, handleModifySchedule } = useSchedule();

  // const handleCloseAlert = () => {
  //   setOpenAlertModal(false);
  // };

  const deleteData = () => {
    // data.map((d) => {
    //   handleDeleteSchedule(d.id as string);
    //   closeAlertModal();
    // });
  };

  const modifyData = (form: Schedule) => {
    // data.map((d) => {
    //   if (moment().isBefore(d.start_date)) {
    //     handleModifySchedule(form);
    //   } else {
    //     handleModifySchedule(form);
    //   }
    // });
  };

  return (
    <Box mb={1}>
      <RoundedBorderBox>
        <Swiper slidesPerView="auto" className="mySwiper" initialSlide={1}>
          <SwiperSlide
            style={{ display: "flex", width: "auto", height: "auto" }}
          >
            <Button variant="contained" onClick={openAlertModal}>
              <DeleteForeverIcon fontSize="large" />
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={5}
              sx={{
                px: 2,
                py: 3,
              }}
            >
              <Box>
                {/* <Box sx={{ mb: 3 }}>{`매${schedule.repeating_cycle.charAt(
                  0
                )} ${moment(schedule.date).format("D일")}`}</Box> */}
                <Box>{schedule.event_name}</Box>
              </Box>
              <Box sx={{ textAlign: "end" }}>
                <Box sx={{ mb: 3 }}>{schedule.event_name}</Box>
                <Box sx={{ color: "primary.main" }}>
                  {`${parseInt(schedule.amount, 10).toLocaleString("ko-kr")}원`}
                </Box>
              </Box>
            </Stack>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: "flex", width: "auto", height: "auto" }}
          >
            <Button
              variant="contained"
              onClick={() => setSettingModalOpen(true)}
            >
              <SettingsIcon fontSize="large" />
            </Button>
          </SwiperSlide>
        </Swiper>
      </RoundedBorderBox>

      <ModifyModal
        settingModalOpen={settingModalOpen}
        setSettingModalOpen={setSettingModalOpen}
        modifyData={modifyData}
        data={schedule}
      />

      <AlertModal
        open={alertModalOpen}
        handleClose={closeAlertModal}
        handleClickYes={() => deleteData()}
        mode="delete"
      />
    </Box>
  );
}

export default SwipeableDetailCard;
