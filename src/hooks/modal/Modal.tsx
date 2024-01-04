import { Backdrop, Box } from "@mui/material";
import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  onClickClose?: () => void;
}

function Modal({ children, onClickClose }: ModalProps) {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
      onClick={onClickClose}
    >
      <Box bgcolor="white" borderRadius="8px">
        {children}
      </Box>
    </Backdrop>
  );
}

export default Modal;
