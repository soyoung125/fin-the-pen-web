import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import MonthPicker from "@hooks/date-picker/components/MonthPicker.tsx";
import moment from "moment";

export const useMonthPicker = (date: string) => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openMonthPicker = (): Promise<moment.Moment> => {
    return new Promise((resolve) => {
      openOverlay(
        <MonthPicker
          date={date}
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
  return { openMonthPicker, closeMonthPicker: closeOverlay };
};
