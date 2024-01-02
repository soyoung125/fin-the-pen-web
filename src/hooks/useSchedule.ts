import { useSelector } from "react-redux";
import {
  deleteSchedule,
  getMonthSchedules,
  selectDate,
  selectIsBottomDrawerOpen,
  selectMonth,
  selectStatus,
  setDrawerSchedule,
  setIsBottomDrawerOpen,
} from "@redux/slices/scheduleSlice.tsx";
import { Schedule } from "@app/types/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import { useCreateSchedule } from "@app/tanstack-query/schedules/useCreateSchedule.ts";
import { useConfirm } from "@hooks/dialog/hooks/useConfirm.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useSchedules } from "@app/tanstack-query/schedules/useSchedules.ts";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { useModifySchedule } from "@app/tanstack-query/schedules/useModifySchedule.ts";

const useSchedule = () => {
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);
  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);
  const isBottomDrawerOpen = useSelector(selectIsBottomDrawerOpen);

  const { data: user } = useUser();
  const { openConfirm } = useConfirm();
  const { createSchedule } = useCreateSchedule();
  const { modifySchedule } = useModifySchedule();
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

  const handleCreateSchedule = async (
    schedule: Schedule,
    stringDate: string
  ) => {
    if (user === undefined) {
      return alert("로그인이 필요합니다.");
    }
    const date = moment(stringDate);

    const scheduleWithUuid = {
      ...schedule,
      id: uuidv4(),
      user_id: user.user_id,
    };

    createSchedule(scheduleWithUuid);
  };

  const handleDeleteSchedule = async (scheduleId: string) => {
    const answer = await openConfirm({
      title: "일정 삭제",
      content: "정말로 삭제 하시겠습니까?",
      approveText: "삭제",
      rejectText: "취소",
    });
    if (answer) {
      console.log(scheduleId);
      const result = await dispatch(deleteSchedule(scheduleId));
      if (result && user) {
        dispatch(
          getMonthSchedules({
            user_id: user.user_id,
            date: date,
          })
        );
      }
    }
  };

  const handleModifySchedule = async (schedule: Schedule) => {
    modifySchedule(schedule);
  };

  const openDrawer = (data: Schedule) => {
    dispatch(setIsBottomDrawerOpen(true));
    dispatch(setDrawerSchedule(data));
  };

  const closeDrawer = () => {
    dispatch(setIsBottomDrawerOpen(false));
  };

  const resetSchedule = () => {
    dispatch(setDrawerSchedule(INIT_SCHEDULE(date)));
  };

  return {
    status,
    schedules,
    isPending,
    isError,
    isBottomDrawerOpen,
    todaySchedules,
    date,
    month,
    handleDeleteSchedule,
    handleCreateSchedule,
    handleModifySchedule,
    openDrawer,
    closeDrawer,
    resetSchedule,
  };
};

export default useSchedule;
