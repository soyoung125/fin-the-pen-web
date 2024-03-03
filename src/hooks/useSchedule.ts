import { useSelector } from "react-redux";
import {
  selectDate,
  selectMonth,
  setDrawerScheduleForm,
} from "@redux/slices/scheduleSlice.tsx";
import { RequestSchedule } from "@app/types/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import { useCreateSchedule } from "@app/tanstack-query/schedules/useCreateSchedule.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useSchedules } from "@app/tanstack-query/schedules/useSchedules.ts";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { useModifySchedule } from "@app/tanstack-query/schedules/useModifySchedule.ts";
import { useScheduleChangeModal } from "@components/ScheduleDrawer/hooks/ScheduleChangeModal/useScheduleChangeModal.tsx";
import { useDeleteSchedule } from "@app/tanstack-query/schedules/useDeleteSchedule.ts";

const useSchedule = () => {
  const dispatch = useAppDispatch();

  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);

  const { data: user } = useUser();
  const { openModal } = useScheduleChangeModal();
  const { createSchedule } = useCreateSchedule();
  const { modifySchedule } = useModifySchedule();
  const { deleteSchedule } = useDeleteSchedule();
  const {
    data: schedules,
    isPending,
    isError,
  } = useSchedules({
    user_id: user?.user_id ?? "",
    date: month,
  });

  const todaySchedules =
    schedules?.filter(
      (schedule) =>
        moment(date).isSameOrAfter(schedule.start_date) &&
        moment(date).isSameOrBefore(schedule.end_date)
    ) ?? [];

  const handleCreateSchedule = async (schedule: RequestSchedule) => {
    if (user === undefined) {
      return alert("로그인이 필요합니다.");
    }

    const scheduleWithUuid = {
      ...schedule,
      schedule_id: uuidv4(),
      user_id: user.user_id,
    };

    createSchedule(scheduleWithUuid);
  };

  const handleDeleteSchedule = async (schedule: RequestSchedule) => {
    const answer = await openModal({
      changeMode: "삭제",
    });
    if (answer && user) {
      deleteSchedule(schedule, answer as string, user.user_id);
    }
  };

  const handleModifySchedule = async (schedule: RequestSchedule) => {
    const answer = await openModal({
      changeMode: "수정",
    });
    if (answer) {
      modifySchedule(schedule, answer as string);
    }
  };

  const resetSchedule = () => {
    dispatch(setDrawerScheduleForm(INIT_SCHEDULE(date)));
  };

  return {
    schedules,
    isPending,
    isError,
    todaySchedules,
    date,
    month,
    handleDeleteSchedule,
    handleCreateSchedule,
    handleModifySchedule,
    resetSchedule,
  };
};

export default useSchedule;
