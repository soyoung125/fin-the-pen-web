import { Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export interface MonthlyExpenditureTargetCardProps {}

export default function MonthlyExpenditureTargetCard({}: MonthlyExpenditureTargetCardProps) {
  return (
    <Stack>
      <Typography fontSize="15px">000님의 이번달 목표 지출 금액</Typography>
      <Stack direction="row">
        <Typography fontSize="20px" fontWeight={700}>
          1,200,000원
        </Typography>
        <SettingsIcon sx={{ color: "#735BF2" }} />
      </Stack>
    </Stack>
  );
}
