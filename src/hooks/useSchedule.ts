import { useSelector } from "react-redux";
import {
  selectDate,
  selectIsBottomDrawerOpen,
  selectMonth,
  setDrawerScheduleForm,
  setIsBottomDrawerOpen,
} from "@redux/slices/scheduleSlice.tsx";
import { Schedule } from "@app/types/schedule.ts";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import { useCreateSchedule } from "@app/tanstack-query/schedules/useCreateSchedule.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useSchedules } from "@app/tanstack-query/schedules/useSchedules.ts";
import { INIT_SCHEDULE } from "@constants/schedule.ts";
import { useModifySchedule } from "@app/tanstack-query/schedules/useModifySchedule.ts";
import { useDialog } from "@hooks/dialog/useDialog.tsx";

const useSchedule = () => {
  const dispatch = useAppDispatch();

  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);
  const isBottomDrawerOpen = useSelector(selectIsBottomDrawerOpen);

  const { data: user } = useUser();
  const { openConfirm } = useDialog();
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
      alert(
        "아직 구현 안됨. useMutation으로 수정해주세요. scheduleId: " +
          scheduleId
      );
    }
  };

  const handleModifySchedule = async (schedule: Schedule) => {
    modifySchedule(schedule);
  };

  const openDrawer = (data: Schedule) => {
    dispatch(setIsBottomDrawerOpen(true));
    dispatch(setDrawerScheduleForm(data));
  };

  const closeDrawer = () => {
    dispatch(setIsBottomDrawerOpen(false));
  };

  const resetSchedule = () => {
    dispatch(setDrawerScheduleForm(INIT_SCHEDULE(date)));
  };

  return {
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
