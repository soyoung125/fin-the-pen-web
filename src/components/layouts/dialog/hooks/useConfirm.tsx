import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import Dialog from "@components/layouts/dialog/Dialog.tsx";

export const useConfirm = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openConfirm = ({
    title,
    content,
    approveText,
    rejectText,
  }: {
    title: string;
    content: string;
    approveText: string;
    rejectText: string;
  }): Promise<boolean> => {
    return new Promise((resolve) => {
      openOverlay(
        <Dialog
          title={title}
          content={content}
          approveText={approveText}
          rejectText={rejectText}
          onClickApprove={() => {
            resolve(true);
            closeOverlay();
          }}
          onClickReject={() => {
            resolve(false);
            closeOverlay();
          }}
        />
      );
    });
  };

  return { openConfirm };
};
