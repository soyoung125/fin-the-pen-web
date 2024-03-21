import { Stack, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PredictBox from "@pages/reports/ReportMonthDetails/components/PredictBox";
import MoneyIcon from "@mui/icons-material/Money";
import asset_icon from "@assets/icons/asset.svg";

export interface ReportMonthTitleProps {
  year: number;
  month: number;
  onClickMonth: () => void;
  goal: number;
  spent: number;
}

function ReportMonthTitle({
  month,
  year,
  onClickMonth,
  goal,
  spent,
}: ReportMonthTitleProps) {
  return (
    <Stack bgcolor="#F7F7F8" borderRadius="12px" p={2} gap="10px">
      <Stack direction="row" alignItems="center" py={0.5} spacing={1}>
        <Typography variant="h2">
          {year}년 {month}월
        </Typography>
        <CalendarTodayIcon sx={{ fontSize: 16 }} onClick={onClickMonth} />
      </Stack>
      <Stack direction="row">
        <PredictBox
          title="지출 목표액"
          titleIcon={
            <img src={asset_icon} alt="asset" width="28px" height="28px" />
          }
          amount={goal}
        />

        <PredictBox
          title="지출 금액"
          titleIcon={<MoneyIcon sx={{ fontSize: "28px" }} />}
          amount={spent}
        />
      </Stack>
    </Stack>
  );
}

export default ReportMonthTitle;
