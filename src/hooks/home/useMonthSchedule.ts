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

  const changeDate = (value: moment.Moment | null) =>
    value && dispatch(setSelectedDate(value.format("YYYY-MM-DD")));

  return {
    monthData,
    isPending,
    isError,
    date,
    changeDate,
  };
};

export default useMonthSchedule;
