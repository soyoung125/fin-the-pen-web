import { useSchedules } from "@app/tanstack-query/schedules/useSchedules";
import { useUser } from "@app/tanstack-query/useUser";
import useSchedule from "@hooks/useSchedule";
import {
  Box,
  CircularProgress,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import ScheduleCard from "./ScheduleCard";
import { CATEGORIES, Category } from "@constants/categories";
import { useState } from "react";
import { Schedule } from "@type/schedule";
import EasyAuthentication from "@containers/sign/EasyAuthentication";
import { useAppDispatch } from "@app/redux/hooks";
import { changeHideBudgetMode } from "@app/redux/slices/settingSlice";

function ScheduleList2() {
  const dispatch = useAppDispatch();
  const { data: user } = useUser();
  const { date, schedules, isPending, isError } = useSchedule(); // redux가 직접 하도록 개선 예정
  // const query = {
  //   user_id: user?.user_id ?? "",
  //   date: month,
  // };
  // const {
  //   data: schedules,
  //   isPending,
  //   isError,
  // } = useSchedules({
  //   user_id: user?.user_id ?? "",
  //   date: month,
  // });
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

  if (!schedules || isError) {
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
    alert(JSON.stringify(schedule));
    // setBottomDrawerOpen(true); // 수정 drawer는 bottombar의 drawer를 공유할 수 있도록 수정 예정
  };

  return (
    <>
      {schedules.map((schedule) => (
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

export default ScheduleList2;
