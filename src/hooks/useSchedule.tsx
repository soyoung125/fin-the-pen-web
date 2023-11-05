import { useSelector } from "react-redux";
import {
  deleteSchedule,
  getMonthSchedules,
  selectDate,
  selectSchedules,
  selectStatus,
} from "@redux/slices/scheduleSlice.tsx";
import { useEffect, useState } from "react";
import { Schedule } from "../types/schedule.tsx";
import { selectUser } from "@redux/slices/userSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

/**
 * 앞으로 스케쥴에 관련된 로직은 여기에 몰아넣고 꺼내쓰는 방식으로 구현
 */

const useSchedule = () => {
  const schedules = useSelector(selectSchedules);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  );
  const status = useSelector(selectStatus);
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const date = useSelector(selectDate);
  const [todaySchedules, setTodaySchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    setTodaySchedules(schedules.filter((schedule) => schedule.date === date));
  }, [schedules]);

  const handleDeleteSchedule = async (scheduleId: string) => {
    if (window.confirm("정말로 삭제 하시겠습니까?")) {
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

  return {
    status,
    schedules,
    selectedSchedule,
    setSelectedSchedule,
    todaySchedules,
    date,
    handleDeleteSchedule,
  };
};

export default useSchedule;
