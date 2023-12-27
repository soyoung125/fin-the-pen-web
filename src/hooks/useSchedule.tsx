import { useSelector } from "react-redux";
import {
  deleteSchedule,
  getMonthSchedules,
  modifySchedule,
  selectDate,
  selectSchedules,
  selectStatus,
} from "@redux/slices/scheduleSlice.tsx";
import { useEffect, useState } from "react";
import { Schedule } from "../types/schedule.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import { useCreateSchedule } from "@app/tanstack-query/schedules/useCreateSchedule.ts";
import { useConfirm } from "@hooks/dialog/hooks/useConfirm.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";

const useSchedule = () => {
  const schedules = useSelector(selectSchedules);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null,
  );
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();
  const { data: user } = useUser();
  const date = useSelector(selectDate);
  const [todaySchedules, setTodaySchedules] = useState<Schedule[]>([]);
  const { openConfirm } = useConfirm();
  const { createSchedule } = useCreateSchedule();

  useEffect(() => {
    setTodaySchedules(
      schedules.filter(
        (schedule) =>
          moment(date).isSameOrAfter(schedule.start_date) &&
          moment(date).isSameOrBefore(schedule.end_date),
      ),
    );
  }, [schedules]);

  const handleCreateSchedule = async (
    schedule: Schedule,
    stringDate: string,
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

    // 원래 일정 추가
    createSchedule(scheduleWithUuid);
    // if (result) {
    //   dispatch(
    //     getMonthSchedules({
    //       user_id: user.user_id,
    //       date: date.format("YYYY-MM"),
    //     })
    //   );
    // }
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
          }),
        );
      }
    }
  };

  const handleModifySchedule = async (schedule: Schedule) => {
    const result = await dispatch(modifySchedule(schedule));
    if (result && user) {
      dispatch(
        getMonthSchedules({
          user_id: user.user_id,
          date: moment(date).format("YYYY-MM"),
        }),
      );
    }
  };

  return {
    status,
    schedules,
    selectedSchedule,
    setSelectedSchedule,
    todaySchedules,
    date,
    handleDeleteSchedule,
    handleCreateSchedule,
    handleModifySchedule,
  };
};

export default useSchedule;
