import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import TimePicker from "@components/layouts/date-picker/components/TimePicker.tsx";

export const useTimePicker = () => {
  const { open, close } = useOverlay();
  const openTimePicker = () => {
    return new Promise((resolve) => {
      open(
        <TimePicker
          onClickApprove={(answer) => {
            resolve(answer);
            close();
          }}
          onClickReject={(answer) => {
            resolve(answer);
            close();
          }}
        />
      );
    });
  };

  return { openTimePicker, close };
};
