import { useContext } from "react";
import DialogContext from "@components/layouts/dialog/DialogContext.tsx";

export const useDialog = () => {
  const { dialog } = useContext(DialogContext);

  const customAlert = ({
    title = "",
    content = "",
    approveText = "확인",
  }: {
    title?: string;
    content?: string;
    approveText?: string;
  }) => {
    return dialog({
      title,
      content,
      approveText,
    });
  };

  const customConfirm = ({
    title = "",
    content = "",
    approveText = "네",
    rejectText = "아니오",
  }: {
    title?: string;
    content?: string;
    approveText?: string;
    rejectText?: string;
  }) => {
    return dialog({
      title,
      content,
      approveText,
      rejectText,
    });
  };

  return { customAlert, customConfirm };
};
