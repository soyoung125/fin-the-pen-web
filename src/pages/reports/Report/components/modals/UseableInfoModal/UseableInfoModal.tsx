import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import UseableAmountCard from "@pages/reports/Report/components/modals/UseableAmountCard";

export interface UseableInfoModalProps {
  closeModal: () => void;
}

function UseableInfoModal({ closeModal }: UseableInfoModalProps) {
  return (
    <Stack p={2.5} spacing={3}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={"h1"}>사용 가능 금액이란?</Typography>
        <IconButton onClick={closeModal}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      <UseableAmountCard />

      <Typography variant={"h5"} pt={2}>
        이번 달 목표 지출에서 이번 달 오늘까지의 지출 금액과 지출 예정 금액을
        제외한 금액입니다.
      </Typography>

      <Box>
        <Typography sx={{ color: "info.main" }}>
          사용 가능 금액이 음수일 경우?
        </Typography>
        <Typography>
          한 달 간의 목표 지출액을 초과 했을 경우, 초과된 금액만큼 음수로
          표시됩니다.
        </Typography>
      </Box>
    </Stack>
  );
}

export default UseableInfoModal;
