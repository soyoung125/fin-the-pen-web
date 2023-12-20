import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import TimePicker from "@components/layouts/date-picker/components/TimePicker.tsx";

export const useTimePicker = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openTimePicker = (): Promise<string> => {
    return new Promise((resolve) => {
      openOverlay(
        <TimePicker
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

  return { openTimePicker, closeOverlay };
};
