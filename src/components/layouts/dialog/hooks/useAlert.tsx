import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import Dialog from "@components/layouts/dialog/Dialog.tsx";

export const useAlert = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openAlert = ({
    title,
    content,
    approveText,
    rejectText,
  }: {
    title?: string;
    content?: string;
    approveText?: string;
    rejectText?: string;
  }): Promise<boolean> => {
    return new Promise((resolve) => {
      openOverlay(
        <Dialog
          title={title ?? ""}
          content={content ?? ""}
          approveText={approveText ?? undefined}
          rejectText={rejectText ?? undefined}
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

  return { openAlert };
};
