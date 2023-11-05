import { useSelector } from "react-redux";
import {
  createSchedule,
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
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import { REPEAT_CYCLE } from "../constants/schedule.tsx";

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

  const handleCreate = async (schedule: Schedule, stringDate: string) => {
    if (user === null) {
      return alert("로그인이 필요합니다.");
    }
    const date = moment(stringDate);

    const scheduleWithUuid = {
      ...schedule,
      id: uuidv4(),
      user_id: user.user_id,
    };
    // 반복 일정 추가
    if (schedule.repeating_cycle !== "없음") {
      if (schedule.repeat_deadline === "없음") {
        alert("반복 종료일을 설정해 주시길 바랍니다.");
        return;
      }
      let repeatDate = moment(schedule.date).add(
        1,
        REPEAT_CYCLE[schedule.repeating_cycle]
      );
      while (moment(schedule.repeat_endDate).isSameOrAfter(repeatDate)) {
        // eslint-disable-next-line no-await-in-loop
        const newData = {
          ...scheduleWithUuid,
          id: uuidv4(),
          date: repeatDate.format("YYYY-MM-DD"),
        };
        dispatch(createSchedule(newData));
        repeatDate = moment(repeatDate).add(
          1,
          REPEAT_CYCLE[schedule.repeating_cycle]
        );
      }
    }

    // 원래 일정 추가
    const result = await dispatch(createSchedule(scheduleWithUuid));
    if (result) {
      dispatch(
        getMonthSchedules({
          user_id: user.user_id,
          date: date.format("YYYY-MM-DD"),
        })
      );
    }
  };

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
    handleCreate,
  };
};

export default useSchedule;
