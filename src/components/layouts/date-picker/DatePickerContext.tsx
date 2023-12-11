import { createContext, Dispatch, SetStateAction } from "react";
import moment from "moment";

const DatePickerContext = createContext<{
  datePicker: () => Promise<string>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}>({
  datePicker: () => new Promise<string>((_, reject) => reject("")),
  value: moment().format("YYYY-MM-DD"),
  setValue: () => {},
});

export default DatePickerContext;
