import { Dialog, DialogProps } from "@mui/material";

interface ModalStaticBackdropProps extends DialogProps {
  width: "xs" | "sm" | "md" | "lg" | "xl" | false;
  component: any; // DialogProps
  open: boolean;
}

export default function ModalStaticBackdrop(props: ModalStaticBackdropProps) {
  const { width, component, open, ...other } = props;

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { borderRadius: "1rem", width: "100%" } }}
      maxWidth={width}
      open={open}
      scroll="body"
      {...other}
    >
      {component}
    </Dialog>
  );
}
