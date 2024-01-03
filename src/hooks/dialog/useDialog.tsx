import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import Dialog from "@hooks/dialog/Dialog.tsx";

export const useDialog = () => {
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

  return { openConfirm, openAlert };
};
