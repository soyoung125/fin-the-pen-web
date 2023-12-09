import { useContext } from "react";
import DatePickerContext from "../DatePickerContext.tsx";

export const useDatePicker = () => {
  const { datePicker } = useContext(DatePickerContext);
  const pickYYYYMMDD = () => {
    return datePicker();
  };
  return { pickYYYYMMDD };
};
