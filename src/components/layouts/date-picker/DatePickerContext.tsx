import { createContext, Dispatch, SetStateAction } from "react";
import moment from "moment";

export type DatePickerType = "date" | "time";

const DatePickerContext = createContext<{
  datePicker: ({ type }: { type: DatePickerType }) => Promise<string>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}>({
  datePicker: ({ type }: { type: DatePickerType }) =>
    new Promise<string>((_, reject) => reject("")),
  value: moment().format("YYYY-MM-DD"),
  setValue: () => {},
});

export default DatePickerContext;
