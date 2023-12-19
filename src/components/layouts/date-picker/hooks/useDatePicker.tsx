import { useContext } from "react";
import DatePickerContext from "../DatePickerContext.tsx";

export const useDatePicker = () => {
  const { datePicker } = useContext(DatePickerContext);
  const pickYYYYMMDD = () => {
    return datePicker({ type: "date" }) as Promise<string>;
  };

  const pickHHMM = () => {
    return datePicker({ type: "time" }) as Promise<string>;
  };

  return { pickYYYYMMDD, pickHHMM };
};
