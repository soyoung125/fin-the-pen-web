import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import DatePicker from "@components/layouts/date-picker/components/DatePicker.tsx";

export const useDatePicker = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openDatePicker = (): Promise<string> => {
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

  return { openDatePicker, closeDatePicker: closeOverlay };
};
