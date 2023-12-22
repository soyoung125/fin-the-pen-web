import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import Dialog from "@hooks/dialog/Dialog.tsx";

export const useAlert = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openAlert = ({
    title,
    content,
    approveText,
  }: {
    title: string;
    content: string;
    approveText: string;
  }): Promise<boolean> => {
    return new Promise((resolve) => {
      openOverlay(
        <Dialog
          title={title}
          content={content}
          approveText={approveText ?? undefined}
          onClickApprove={() => {
            resolve(true);
            closeOverlay();
          }}
          onClickReject={() => {}}
        />
      );
    });
  };

  return { openAlert };
};
