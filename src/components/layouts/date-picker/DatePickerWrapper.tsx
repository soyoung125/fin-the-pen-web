import { ReactNode, useState } from "react";
import DatePickerContext, {
  DatePickerContextParams,
  DatePickerContextType,
} from "@components/layouts/date-picker/DatePickerContext.tsx";
import DatePicker from "@components/layouts/date-picker/DatePicker.tsx";

export interface DatePickerState {
  title?: string;
  content?: ReactNode;
  onClickApprove: (answer: string) => void;
  onClickReject: () => void;
  rejectText?: string;
  approveText?: string;
}

function DatePickerWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DatePickerState>();

  const datePicker = ({
    title,
    content,
    rejectText,
    approveText,
  }: DatePickerContextParams): Promise<DatePickerContextType> => {
    return new Promise((resolve) => {
      setState({
        title: title ?? "",
        content: content ?? "",
        approveText: approveText ?? undefined,
        rejectText: rejectText ?? undefined,
        onClickApprove: (answer: string) => {
          setState(undefined);
          resolve(answer);
        },
        onClickReject: () => {
          setState(undefined);
          resolve(null);
        },
      });
    });
  };

  return (
    <DatePickerContext.Provider value={{ datePicker }}>
      {children}
      {state && (
        <DatePicker
          title={state.title}
          content={state.content}
          onClickApprove={state.onClickApprove}
          onClickReject={state.onClickReject}
          rejectText={state.rejectText}
          approveText={state.approveText}
        />
      )}
    </DatePickerContext.Provider>
  );
}

export default DatePickerWrapper;
