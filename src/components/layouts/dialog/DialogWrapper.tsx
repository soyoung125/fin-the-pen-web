import { ReactNode, useState } from "react";
import Dialog from "@components/layouts/dialog/Dialog.tsx";
import DialogContext, {
  DialogContextParams,
} from "@components/layouts/dialog/DialogContext.tsx";

export interface DialogState {
  title?: string;
  content?: string;
  onClickApprove: () => void;
  onClickReject: () => void;
  rejectText?: string;
  approveText?: string;
}

function DialogWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DialogState>();

  const dialog = ({
    title,
    content,
    rejectText,
    approveText,
  }: DialogContextParams): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        title: title ?? "",
        content: content ?? "",
        approveText: approveText ?? undefined,
        rejectText: rejectText ?? undefined,
        onClickApprove: () => {
          setState(undefined);
          resolve(true);
        },
        onClickReject: () => {
          setState(undefined);
          resolve(false);
        },
      });
    });
  };

  return (
    <DialogContext.Provider value={{ dialog }}>
      {children}
      {state && (
        <Dialog
          title={state.title}
          content={state.content}
          onClickApprove={state.onClickApprove}
          onClickReject={state.onClickReject}
          rejectText={state.rejectText}
          approveText={state.approveText}
        />
      )}
    </DialogContext.Provider>
  );
}

export default DialogWrapper;
