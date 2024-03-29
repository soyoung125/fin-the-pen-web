import {
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { CONTROLLING_ALERT } from "../../constants/alerts.tsx";

interface AlertModalProps {
  open: boolean;
  handleClose?: () => void;
  handleClickYes: () => void;
  mode:
    | "setting"
    | "modify"
    | "reset"
    | "delete"
    | "hideBudget"
    | "saveFilter"
    | "confirmCloseFilter";
  content?: string;
}

function AlertModal(props: AlertModalProps) {
  const { open, handleClose, handleClickYes, mode, content } = props;

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { borderRadius: "1rem", width: "100%" } }}
      open={open}
      scroll="body"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={1}
      >
        <Button disabled />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          알림
        </Typography>
        <Button onClick={handleClose}>
          <ClearIcon />
        </Button>
      </Stack>
      <Box my={1}>
        <Divider />
      </Box>

      <Box mx={3} my={2}>
        <Box
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            my: 2,
            whiteSpace: "pre-wrap",
          }}
        >
          {content ? content : CONTROLLING_ALERT[mode]}
        </Box>
        <Grid container spacing={1}>
          {handleClose && (
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#D8D8D8" }}
                onClick={handleClose}
              >
                취소
              </Button>
            </Grid>
          )}
          <Grid item xs>
            <Button fullWidth variant="contained" onClick={handleClickYes}>
              확인
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

export default AlertModal;
