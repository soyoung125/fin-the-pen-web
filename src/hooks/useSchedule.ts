import { useSelector } from "react-redux";
import {
  selectDate,
  selectMonth,
  setDrawerScheduleForm,
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
import { useScheduleChangeModal } from "@components/ScheduleDrawer/hooks/ScheduleChangeModal/useScheduleChangeModal.tsx";
import { useDeleteSchedule } from "@app/tanstack-query/schedules/useDeleteSchedule.ts";

const useSchedule = () => {
  const dispatch = useAppDispatch();

  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);

  const { data: user } = useUser();
  const { openConfirm } = useDialog();
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

  const handleDeleteSchedule = async (schedule: Schedule) => {
    // const answer = await openConfirm({
    //   title: "일정 삭제",
    //   content: "정말로 삭제 하시겠습니까?",
    //   approveText: "삭제",
    //   rejectText: "취소",
    // });
    const answer = await openModal({
      changeMode: "삭제",
    });
    if (answer && user) {
      // console.log(scheduleId);
      // alert(
      //   "아직 구현 안됨. useMutation으로 수정해주세요. scheduleId: " +
      //     scheduleId
      // );
      deleteSchedule(schedule, answer as string, user.user_id);
    }
  };

  const handleModifySchedule = async (schedule: Schedule) => {
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
