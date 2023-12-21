import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import TimePicker from "@components/layouts/date-picker/components/TimePicker.tsx";

export const useTimePicker = () => {
  const { openOverlay, closeOverlay } = useOverlay();
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

  return { openTimePicker, closeTimePicker: closeOverlay };
};
