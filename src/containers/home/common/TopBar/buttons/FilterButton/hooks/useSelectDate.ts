import { useState } from "react";

export interface SelectDate {
  startDate: string;
  endDate: string;
}

export const useSelectDate = () => {
  const [date, setDate] = useState<SelectDate>({ endDate: "", startDate: "" });

  return { date, setDate };
};
