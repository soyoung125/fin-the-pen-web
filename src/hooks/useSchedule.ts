import { useSelector } from "react-redux";
import {
  selectDate,
  selectMonth,
  setDrawerScheduleForm,
} from "@redux/slices/scheduleSlice.tsx";
import { RequestSchedule, Schedule } from "@app/types/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import { useCreateSchedule } from "@app/tanstack-query/schedules/useCreateSchedule.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useSchedules } from "@app/tanstack-query/schedules/useSchedules.ts";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { useModifySchedule } from "@app/tanstack-query/schedules/useModifySchedule.ts";
import { useDeleteSchedule } from "@app/tanstack-query/schedules/useDeleteSchedule.ts";

const useSchedule = () => {
  const dispatch = useAppDispatch();

  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);

  const { data: user } = useUser();
  const { createSchedule } = useCreateSchedule();
  const { modifySchedule } = useModifySchedule();
  const { deleteSchedule } = useDeleteSchedule();
  const { data, isPending, isError } = useSchedules({
    user_id: user?.user_id ?? "",
    date: month,
  });

  const schedules = data?.data;

  const todaySchedules =
    schedules?.filter(
      (schedule) =>
        moment(date).isSameOrAfter(schedule.start_date) &&
        moment(date).isSameOrBefore(schedule.end_date)
    ) ?? [];

  const lastDay = moment(date).endOf("month").date();
  const arr = Array.from({ length: lastDay }, (_, i) => i + 1);
  const init: { [key: string]: Schedule[] } = {};
  const monthSchedules = arr.reduce((prev, current) => {
    const date = moment(`${month}-${current}`, "YYYY-MM-D");
    const today = schedules?.filter(
      (schedule: Schedule) =>
        date.isSameOrAfter(schedule.start_date) &&
        date.isSameOrBefore(schedule.end_date)
    );
    if (today && today.length !== 0) {
      return {
        ...prev,
        [date.format("YYYY-MM-DD")]: today,
      };
    } else {
      return prev;
    }
  }, init);

  const handleCreateSchedule = async (schedule: RequestSchedule) => {
    if (!user) {
      return alert("로그인이 필요합니다.");
    }

    const scheduleWithUuid = {
      ...schedule,
      schedule_id: uuidv4(),
      user_id: user.user_id,
    };

    createSchedule(scheduleWithUuid);
  };

  const handleDeleteSchedule = async (
    schedule: RequestSchedule,
    answer: string
  ) => {
    if (user) {
      deleteSchedule(schedule, answer, user.user_id);
    }
  };

  const handleModifySchedule = async (
    schedule: RequestSchedule,
    answer: string
  ) => {
    modifySchedule(schedule, answer);
  };

  const resetSchedule = () => {
    dispatch(setDrawerScheduleForm(INIT_SCHEDULE(date)));
  };

  return {
    data,
    schedules,
    monthSchedules,
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
