import { useState } from "react";

export interface SelectDate {
  startDate: string;
  endDate: string;
}

export const useSelectDate = () => {
  const [date, setDate] = useState<SelectDate>({ endDate: "", startDate: "" });
  const [error, setError] = useState<string>("");

  const checkDateOrder = ({ startDate, endDate }: SelectDate) => {
    if (startDate && endDate) {
      return startDate <= endDate;
    }
    return true;
  };

  const updateDate = (type: keyof SelectDate, value: string) => {
    const nextDate = { ...date, [type]: value };
    if (checkDateOrder(nextDate)) {
      setDate(nextDate);
      setError("");
    } else {
      setDate((prev) => ({ ...prev, [type]: "" }));
      setError("종료일이 시작일보다 빠를 수 없습니다.");
    }
  };

  return { date, error, updateDate };
};
