import { useContext } from "react";
import DatePickerContext from "../DatePickerContext.tsx";

export const useDatePicker = () => {
  const { datePicker } = useContext(DatePickerContext);
  const pickYYYYMMDD = () => {
    return datePicker({ type: "date" });
  };

  const pickHHMM = () => {
    return datePicker({ type: "time" });
  };

  return { pickYYYYMMDD, pickHHMM };
};
