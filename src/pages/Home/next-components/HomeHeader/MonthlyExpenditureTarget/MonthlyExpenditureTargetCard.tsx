import { Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export interface MonthlyExpenditureTargetCardProps {
  amount: number;
  userName: string;
}

export default function MonthlyExpenditureTargetCard({
  amount,
  userName,
}: MonthlyExpenditureTargetCardProps) {
  return (
    <Stack>
      <Typography fontSize="15px">
        {userName}님의 이번달 목표 지출 금액
      </Typography>
      <Stack direction="row">
        <Typography fontSize="20px" fontWeight={700}>
          {amount}원
        </Typography>
        <SettingsIcon
          sx={{ color: "#735BF2" }}
          onClick={() => alert("open goal picker")}
        />
      </Stack>
    </Stack>
  );
}
