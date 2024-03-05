import { useSelector } from "react-redux";
import {
  selectDate,
  selectMonth,
  setSelectedDate,
} from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import moment from "moment/moment";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import { useMonthSchedules } from "@app/tanstack-query/home/useMonthSchedules.ts";

const useHome = () => {
  const dispatch = useAppDispatch();

  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);

  const { openMonthPicker, openDayPicker } = useDatePicker();

  const addMonth = () => {
    dispatch(
      setSelectedDate(moment(date).add(1, "month").format("YYYY-MM-DD"))
    );
  };

  const subtractMonth = () => {
    dispatch(
      setSelectedDate(moment(date).subtract(1, "month").format("YYYY-MM-DD"))
    );
  };

  const addDay = () => {
    dispatch(setSelectedDate(moment(date).add(1, "day").format("YYYY-MM-DD")));
  };

  const subtractDay = () => {
    dispatch(
      setSelectedDate(moment(date).subtract(1, "day").format("YYYY-MM-DD"))
    );
  };

  const pickMonth = async () => {
    const newMonth = await openMonthPicker(moment(date).format("YYYY-MM"));
    dispatch(setSelectedDate(newMonth.format("YYYY-MM-DD")));
  };

  const pickDay = async () => {
    const newDay = await openDayPicker(date);
    dispatch(setSelectedDate(newDay));
  };

  const changeDate = (value: moment.Moment | null) =>
    value && dispatch(setSelectedDate(value.format("YYYY-MM-DD")));

  const changeToToday = () => {
    dispatch(setSelectedDate(moment().format("YYYY-MM-DD")));
  };

  return {
    date,
    month,
    addMonth,
    subtractMonth,
    addDay,
    subtractDay,
    pickMonth,
    pickDay,
    changeDate,
    changeToToday,
  };
};

export default useHome;
