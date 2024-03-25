import { useSelector } from "react-redux";
import {
  selectDate,
  selectMonth,
  setSelectedDate,
} from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useMonthSchedules } from "@app/tanstack-query/home/useMonthSchedules.ts";
import { Schedule } from "@app/types/schedule.ts";

const useMonthSchedule = () => {
  const dispatch = useAppDispatch();

  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);

  const { data: user } = useUser();
  const {
    data: monthData,
    isPending,
    isError,
  } = useMonthSchedules({
    user_id: user?.user_id ?? "",
    main_month: month,
    calendar_date: date,
  });

  const schedules = monthData?.data;

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

  const changeDate = (value: moment.Moment | null) =>
    value && dispatch(setSelectedDate(value.format("YYYY-MM-DD")));

  return {
    monthData,
    isPending,
    isError,
    date,
    todaySchedules,
    monthSchedules,
    changeDate,
  };
};

export default useMonthSchedule;
