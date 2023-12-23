import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import MonthPicker from "@hooks/date-picker/components/MonthPicker.tsx";
import moment from "moment";

export const useMonthPicker = () => {
  const { openOverlay, closeOverlay } = useOverlay();
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
  return { openMonthPicker, closeMonthPicker: closeOverlay };
};
