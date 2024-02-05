import { useState } from "react";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useReports } from "@app/tanstack-query/reports/useReports.ts";
import moment from "moment";

const useReport = () => {
  const [yearMonth, setYearMonth] = useState("2024-01");
  const [year, month] = yearMonth.split("-").map((s) => Number(s));
  const { data: user } = useUser();
  const {
    data: reportList,
    isPending,
    isError,
  } = useReports({
    user_id: user?.user_id ?? "",
    date: moment(yearMonth, "YYYY-MM").format("YYYY-MM-DD"),
  });
  const { openMonthPicker } = useDatePicker();

  const maxPercent = Math.max(
    ...(reportList?.map((l) => Number(l.rate)) ?? [])
  );

  const addMonth = () => {
    const date = moment(yearMonth, "YYYY-MM");
    setYearMonth(date.add(1, "month").format("YYYY-MM"));
  };

  const subtractMonth = () => {
    const date = moment(yearMonth, "YYYY-MM");
    setYearMonth(date.subtract(1, "month").format("YYYY-MM"));
  };

  const pickMonth = async () => {
    const newMonth = await openMonthPicker(yearMonth);
    setYearMonth(newMonth.format("YYYY-MM"));
  };

  return {
    yearMonth,
    year,
    month,
    reportList,
    isPending,
    isError,
    openMonthPicker,
    maxPercent,
    addMonth,
    subtractMonth,
    pickMonth,
  };
};

export default useReport;
