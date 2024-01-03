import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import DatePicker from "@hooks/date-picker/components/DatePicker.tsx";
import moment from "moment/moment";
import MonthPicker from "@hooks/date-picker/components/MonthPicker.tsx";
import TimePicker from "@hooks/date-picker/components/TimePicker.tsx";

export const useDatePicker = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openDayPicker = (): Promise<string> => {
    return new Promise((resolve) => {
      openOverlay(
        <DatePicker
          onClickApprove={(answer) => {
            resolve(answer);
            closeOverlay();
          }}
          onClickReject={(answer) => {
            resolve(answer);
            closeOverlay();
          }}
        />
      );
    });
  };

  const openMonthPicker = (defaultDate: string): Promise<moment.Moment> => {
    return new Promise((resolve) => {
      openOverlay(
        <MonthPicker
          defaultDate={defaultDate}
          onClickApprove={(answer) => {
            resolve(answer);
            closeOverlay();
          }}
          onClickReject={(answer) => {
            resolve(answer);
            closeOverlay();
          }}
        />
      );
    });
  };

  const openTimePicker = ({
    defaultTime,
  }: {
    defaultTime: string;
  }): Promise<string> => {
    return new Promise((resolve) => {
      openOverlay(
        <TimePicker
          defaultTime={defaultTime}
          onClickApprove={(answer) => {
            resolve(answer);
            closeOverlay();
          }}
          onClickReject={(answer) => {
            resolve(answer);
            closeOverlay();
          }}
        />
      );
    });
  };

  return {
    openDayPicker,
    openMonthPicker,
    openTimePicker,
    closeDatePicker: closeOverlay,
  };
};
