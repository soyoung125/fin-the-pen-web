import { createContext } from "react";

const DatePickerContext = createContext<{
  datePicker: () => Promise<string>;
  // timePicker: () => Promise<string>;
}>({
  datePicker: () => new Promise<string>((_, reject) => reject("")),
  // timePicker: () => new Promise<string>((_, reject) => reject("")),
});

export default DatePickerContext;
