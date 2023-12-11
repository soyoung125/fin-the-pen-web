import { ReactNode, useState } from "react";
import DatePickerContext, {
  DatePickerType,
} from "@components/layouts/date-picker/DatePickerContext.tsx";
import DatePicker from "@components/layouts/date-picker/DatePicker.tsx";
import moment from "moment/moment";

export interface DatePickerState {
  type: DatePickerType;
  onClickApprove: (answer: string) => void;
  onClickReject: (answer: string) => void;
}

function DatePickerWrapper({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(moment().format("YYYY-MM-DD"));
  const [datePickerState, setDatePickerState] = useState<DatePickerState>();

  const datePicker = ({ type }: { type: DatePickerType }): Promise<string> => {
    return new Promise((resolve) => {
      setDatePickerState({
        type,
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
    <DatePickerContext.Provider value={{ value, setValue, datePicker }}>
      {children}
      {datePickerState?.type === "date" && (
        <DatePicker
          onClickApprove={datePickerState.onClickApprove}
          onClickReject={datePickerState.onClickReject}
        />
      )}
    </DatePickerContext.Provider>
  );
}

export default DatePickerWrapper;
