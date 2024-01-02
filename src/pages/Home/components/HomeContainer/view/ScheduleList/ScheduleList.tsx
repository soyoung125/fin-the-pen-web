import useSchedule from "@hooks/useSchedule.ts";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import moment from "moment";
import ScheduleCard from "./ScheduleCard.tsx";
import { CATEGORIES, Category } from "@constants/categories.tsx";
import { useState } from "react";
import { Schedule } from "@type/schedule.tsx";
import EasyAuthentication from "@components/sign/EasyAuthentication.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import { changeHideBudgetMode } from "@redux/slices/settingSlice.ts";
import { INIT_PERIOD, INIT_REPEAT } from "@constants/schedule.tsx";

function ScheduleList() {
  const dispatch = useAppDispatch();
  const { date, todaySchedules, isPending, isError, openDrawer } =
    useSchedule(); // redux가 직접 하도록 개선 예정
  const [authenticationPageOpen, setAuthenticationPageOpen] = useState(false);

  if (isPending) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box my={5}>
          <CircularProgress />
        </Box>
      </Stack>
    );
  }

  if (!todaySchedules || isError) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Box my={5}>
          <Typography>{date}에 등록된 일정이 없습니다!</Typography>
        </Box>
      </Stack>
    );
  }

  if (authenticationPageOpen) {
    return (
      <EasyAuthentication
        handleAuthenticate={() => dispatch(changeHideBudgetMode(false))}
      />
    );
  }

  const handleModal = (schedule: Schedule) => {
    // setBottomDrawerOpen(true); // 수정 drawer는 bottombar의 drawer를 공유할 수 있도록 수정 예정
    if (schedule) {
      const start = moment(schedule.start_date); // getMonthSchedule api 수정 후 제거 예정
      openDrawer({
        ...schedule,
        repeat: INIT_REPEAT(start),
        period: INIT_PERIOD(start),
      });
    }
  };

  return (
    <>
      {todaySchedules.map((schedule) => (
        <ScheduleCard
          schedule={schedule}
          category={
            // 추후 제거 예정
            CATEGORIES.find((c) => c.title === schedule.category) ||
            ({ color: "#C8A2C8" } as Category)
          }
          key={Math.random()}
          handleModal={handleModal}
          openAuthenticationPage={() => setAuthenticationPageOpen(true)}
        />
      ))}
    </>
  );
}

export default ScheduleList;
