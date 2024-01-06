import { Stack, Typography } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export interface MonthlyScheduleSummaryProps {
  scheduleCount: number;
  onClickNavigateButton: () => void;
}

function MonthlyScheduleSummary({
  scheduleCount,
  onClickNavigateButton,
}: MonthlyScheduleSummaryProps) {
  return (
    <Stack
      borderRadius="8px"
      sx={{ background: "rgba(115, 91, 242, 0.10)" }}
      py="12px"
      px="16px"
      direction="row"
      justifyContent="space-between"
    >
      <Typography fontSize="14px">이번 달 남은 일정</Typography>
      <Stack
        direction="row"
        alignItems="center"
        color="#6D29F6"
        onClick={onClickNavigateButton}
      >
        <Typography fontSize="16px">{scheduleCount} 개</Typography>
        <ArrowForwardIos sx={{ fontSize: "16px" }} />
      </Stack>
    </Stack>
  );
}

export default MonthlyScheduleSummary;
