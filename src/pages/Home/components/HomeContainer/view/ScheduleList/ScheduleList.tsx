import useSchedule from "@hooks/useSchedule.ts";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import moment from "moment";
import ScheduleCard from "./ScheduleCard.tsx";
import { CATEGORIES, Category } from "@constants/categories.ts";
import { useState } from "react";
import { Schedule } from "@app/types/schedule.ts";
import EasyAuthentication from "@components/sign/EasyAuthentication.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import { changeHideBudgetMode } from "@redux/slices/settingSlice.ts";
import { INIT_PERIOD, INIT_REPEAT } from "@constants/schedule.ts";
import { useScheduleDrawer } from "@hooks/useScheduleDrawer.tsx";

function ScheduleList() {
  const dispatch = useAppDispatch();
  const { date, todaySchedules, isPending, isError } = useSchedule(); // redux가 직접 하도록 개선 예정
  const { openScheduleDrawer } = useScheduleDrawer();
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

  if (todaySchedules.length === 0 || isError) {
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
    if (schedule) {
      const start = moment(schedule.start_date); // getMonthSchedule api 수정 후 제거 예정
      openScheduleDrawer({
        ...schedule,
        is_all_day: schedule.all_day,
        set_amount: schedule.amount,
        exclusion: schedule.exclude,
        repeat: INIT_REPEAT(start),
        period: INIT_PERIOD(start),
      });
    }
  };

  return (
    <>
      {todaySchedules.map((schedule, i) => (
        <ScheduleCard
          schedule={schedule}
          category={
            // 추후 제거 예정
            CATEGORIES.find((c) => c.title === schedule.category) ||
            ({ color: "#C8A2C8" } as Category)
          }
          key={schedule.schedule_id}
          handleModal={handleModal}
          openAuthenticationPage={() => setAuthenticationPageOpen(true)}
        />
      ))}
    </>
  );
}

export default ScheduleList;
