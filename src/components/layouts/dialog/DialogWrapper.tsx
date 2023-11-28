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
}

function DialogWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DialogState>();

  const dialog = ({
    title,
    content,
  }: DialogContextParams): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        title: title ?? "",
        content: content ?? "",
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
        />
      )}
    </DialogContext.Provider>
  );
}

export default DialogWrapper;
