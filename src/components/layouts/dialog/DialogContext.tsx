import { createContext } from "react";

export interface DialogContextParams {
  title?: string;
  content?: string;
}

const DialogContext = createContext<{
  dialog: ({ title, content }: DialogContextParams) => Promise<boolean>;
}>({ dialog: () => new Promise<boolean>((_, reject) => reject(false)) });

export default DialogContext;
