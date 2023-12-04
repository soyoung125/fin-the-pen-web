import { createContext } from "react";

export interface DialogContextParams {
  title?: string;
  content?: string;
  rejectText?: string;
  approveText?: string;
}

const DialogContext = createContext<{
  dialog: ({
    title,
    content,
    approveText,
    rejectText,
  }: DialogContextParams) => Promise<boolean>;
}>({ dialog: () => new Promise<boolean>((_, reject) => reject(false)) });

export default DialogContext;
