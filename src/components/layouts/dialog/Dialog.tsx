import { Dialog as MuiDialog } from "@mui/material";

interface DialogProps {
  title?: string;
  content?: string;
  onClickApprove: () => void;
  onClickReject: () => void;
}
function Dialog({
  title,
  content,
  onClickApprove,
  onClickReject,
}: DialogProps) {
  return (
    <MuiDialog
      sx={{ "& .MuiDialog-paper": { borderRadius: "1rem", width: "100%" } }}
      open={true}
      scroll="body"
    >
      Dialog {title} {content}
      <button onClick={onClickReject}>닫기</button>
      <button onClick={onClickApprove}>확인</button>
    </MuiDialog>
  );
}

export default Dialog;
