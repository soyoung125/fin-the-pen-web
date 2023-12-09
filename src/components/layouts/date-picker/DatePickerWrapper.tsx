import { ReactNode, useState } from "react";
import DatePickerContext from "@components/layouts/date-picker/DatePickerContext.tsx";
import DatePicker from "@components/layouts/date-picker/DatePicker.tsx";

export interface DatePickerState {
  onClickApprove: (answer: string) => void;
  onClickReject: (answer: string) => void;
}

function DatePickerWrapper({ children }: { children: ReactNode }) {
  const [datePickerState, setDatePickerState] = useState<DatePickerState>();

  const datePicker = (): Promise<string> => {
    return new Promise((resolve) => {
      setDatePickerState({
        onClickApprove: (answer: string) => {
          setDatePickerState(undefined);
          resolve(answer);
        },
        onClickReject: (answer: string) => {
          setDatePickerState(undefined);
          resolve(answer);
        },
      });
    });
  };

  return (
    <DatePickerContext.Provider value={{ datePicker }}>
      {children}
      {datePickerState && (
        <DatePicker
          onClickApprove={datePickerState.onClickApprove}
          onClickReject={datePickerState.onClickReject}
        />
      )}
    </DatePickerContext.Provider>
  );
}

export default DatePickerWrapper;
