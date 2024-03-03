import { Stack, Button, Typography, IconButton, Box } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export interface GoalSettingModalProps {
  closeModal: () => void;
  navigateTo?: () => void;
}

function GoalSettingModal({ closeModal, navigateTo }: GoalSettingModalProps) {
  return (
    <Stack p={2.5} spacing={3}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        pb={1.5}
        sx={{ borderBottom: "1px solid #C8CBD0" }}
      >
        <Box width="24px" />
        <Typography variant={"h1"}>알림</Typography>
        <IconButton onClick={closeModal}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      <Typography variant={"h4"}>
        월별 지출 목표액을 수정하시겠습니끼?
      </Typography>

      <Stack spacing={1}>
        <Button variant="contained" color="primary" onClick={navigateTo}>
          예 (자산관리로 이동)
        </Button>
        <Button variant="contained" color="secondary" onClick={closeModal}>
          아니오
        </Button>
      </Stack>
    </Stack>
  );
}

export default GoalSettingModal;
