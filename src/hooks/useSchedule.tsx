import { useSelector } from "react-redux";
import {
  selectDate,
  selectSchedules,
  selectStatus,
} from "../app/redux/slices/scheduleSlice";
import { useEffect, useState } from "react";
import { Schedule } from "../types/schedule.tsx";
import moment from "moment/moment";

/**
 * 앞으로 스케쥴에 관련된 로직은 여기에 몰아넣고 꺼내쓰는 방식으로 구현
 */

const useSchedule = () => {
  const schedules = useSelector(selectSchedules);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  );
  const status = useSelector(selectStatus);
  const date = moment(useSelector(selectDate)).format("YYYY-MM-DD");
  const [todaySchedules, setTodaySchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    setTodaySchedules(schedules.filter((schedule) => schedule.date === date));
  }, [schedules]);

  return {
    status,
    schedules,
    selectedSchedule,
    setSelectedSchedule,
    todaySchedules,
    date,
  };
};

export default useSchedule;
