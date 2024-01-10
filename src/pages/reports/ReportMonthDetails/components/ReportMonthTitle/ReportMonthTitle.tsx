import { Box, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import PredictBox from "@pages/reports/ReportMonthDetails/components/PredictBox";
import MoneyIcon from "@mui/icons-material/Money";

export interface ReportMonthTitleProps {
  year: number;
  month: number;
  onClickMonth: () => void;
}

function ReportMonthTitle({
  month,
  year,
  onClickMonth,
}: ReportMonthTitleProps) {
  return (
    <Stack bgcolor="#F7F7F8" borderRadius="12px" p="14px" gap="10px">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontSize="16px">
          {year}년 {month}월
        </Typography>
        <CalendarTodayIcon sx={{ fontSize: 16 }} onClick={onClickMonth} />
      </Stack>
      <Stack direction="row">
        <PredictBox
          title="지출 목표액"
          titleIcon={<AccountBalanceWalletIcon />}
          amount={1200000}
          navigateIcon={<SettingsIcon fontSize="small" />}
        />

        <PredictBox
          title="지출 금액"
          titleIcon={<MoneyIcon />}
          amount={579000}
        />
      </Stack>
    </Stack>
  );
}

export default ReportMonthTitle;
