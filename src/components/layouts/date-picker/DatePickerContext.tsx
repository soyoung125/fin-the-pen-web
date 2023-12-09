import { createContext, ReactNode } from "react";

export interface DatePickerContextParams {
  title?: string;
  content?: ReactNode;
  rejectText?: string;
  approveText?: string;
}

export type DatePickerContextType = string | null;

const DatePickerContext = createContext<{
  datePicker: ({
    title,
    content,
    approveText,
    rejectText,
  }: DatePickerContextParams) => Promise<DatePickerContextType>;
}>({
  datePicker: () =>
    new Promise<DatePickerContextType>((_, reject) => reject(null)),
});

export default DatePickerContext;
