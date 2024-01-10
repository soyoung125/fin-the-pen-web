import { Stack, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export interface ReportCategorySummaryProps {
  year: number;
  month: number;
  category: string;
  amount: number;
  goal: number;
  onClickDateButton: () => void;
}

function ReportCategorySummary({
  category,
  amount,
  goal,
  year,
  month,
  onClickDateButton,
}: ReportCategorySummaryProps) {
  return (
    <Stack border="1px solid #DEE0E3" borderRadius="12px" p={2.5}>
      <Stack>
        <Stack direction="row" alignItems="center" gap="8px">
          <Typography color="#222B45" fontSize="16px">
            {year}년 {month}월
          </Typography>
          <ArrowForwardIosSharpIcon
            onClick={onClickDateButton}
            sx={{ fontSize: "16px", color: "#8C919C" }}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="22px" fontWeight={700}>
            {category}
          </Typography>
          <Typography fontSize="20px" color="#5B5F67">
            {amount.toLocaleString()}원 사용
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="end">
          <Typography fontSize="14px" color="#5B5F67" fontWeight={400}>
            설정 목표액까지 {(goal - amount).toLocaleString()}원
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <progress value="75" max="100" style={{ width: "100%" }} />
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="14px" fontWeight={500}>
            {amount.toLocaleString()}원 지출
          </Typography>
          <Typography fontSize="14px" fontWeight={400} color="#8C919C">
            목표 {goal.toLocaleString()}원
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ReportCategorySummary;
