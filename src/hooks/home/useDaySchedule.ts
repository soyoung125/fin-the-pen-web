import { useSelector } from "react-redux";
import { selectDate, selectMonth } from "@redux/slices/scheduleSlice.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useDaySchedules } from "@app/tanstack-query/home/useDaySchedules.ts";

const useDaySchedule = () => {
  const date = useSelector(selectDate);
  const month = useSelector(selectMonth);

  const { data: user } = useUser();
  const {
    data: dayData,
    isPending,
    isError,
  } = useDaySchedules({
    user_id: user?.user_id ?? "",
    main_month: month,
    calendar_date: date,
  });

  return {
    dayData,
    isPending,
    isError,
    date,
  };
};

export default useDaySchedule;
