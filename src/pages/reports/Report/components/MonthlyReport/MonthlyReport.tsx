import { Box, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LineChart from "@pages/reports/Report/components/MonthlyReport/LineChart";

export interface MonthlyReportProps {
  month: number;
  spending: number;
  previousSpending: number;
  twoMonthsAgoSpending: number;
}

function MonthlyReport({
  month,
  spending,
  previousSpending,
  twoMonthsAgoSpending,
}: MonthlyReportProps) {
  const difference = spending - previousSpending;
  const labels = Array.from(
    { length: 3 },
    (_, i) => `${month - i}월`
  ).reverse();
  const datas = [twoMonthsAgoSpending, previousSpending, spending];

  return (
    <>
      <Typography variant="subtitle2">최근 3개월간 소비 리포트</Typography>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2">{month - 1}대비</Typography>
        {difference < 0 ? (
          <ArrowDropDownIcon color="info" />
        ) : (
          <ArrowDropUpIcon color="error" />
        )}
        <Box
          sx={{
            backgroundColor: "#F5F4FF",
            color: "primary.main",
            borderRadius: "999px",
            paddingX: "8px",
            paddingY: "2px",
            fontSize: "12px",
            fontWeight: 400,
          }}
        >
          {difference.toLocaleString()}원
        </Box>
      </Stack>

      <LineChart labels={labels} datas={datas} />
    </>
  );
}

export default MonthlyReport;
