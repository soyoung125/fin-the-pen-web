import { createContext, Dispatch, SetStateAction } from "react";
import moment from "moment";

export type DatePickerType = "date" | "time";

const DatePickerContext = createContext<{
  datePicker: ({ type }: { type: DatePickerType }) => Promise<unknown>;
  value: unknown;
  setValue: Dispatch<SetStateAction<unknown>>;
}>({
  datePicker: ({ type }: { type: DatePickerType }) =>
    new Promise<string>((_, reject) => reject("")),
  value: moment().format("YYYY-MM-DD"),
  setValue: () => {},
});

export default DatePickerContext;
