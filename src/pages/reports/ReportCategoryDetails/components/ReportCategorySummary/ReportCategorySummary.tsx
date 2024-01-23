import { Stack, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export interface ReportCategorySummaryProps {
  category: string;
  amount: number;
  goal: number;
  used: number;
  predict: number;
  useable: number;
}

function ReportCategorySummary({
  category,
  amount,
  goal,
  used,
  predict,
  useable,
}: ReportCategorySummaryProps) {
  return (
    <Stack py={3} px={2} spacing={2.5}>
      <Stack px={1} direction="row" justifyContent="space-between">
        <Typography fontSize="20px" fontWeight={500}>
          {category}
        </Typography>
        <Typography variant="h2">{amount.toLocaleString()}원 사용</Typography>
      </Stack>

      <Stack spacing={0.5}>
        <progress value="75" max="100" style={{ width: "100%" }} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" fontWeight={400}>
            지출 {amount.toLocaleString()}원
          </Typography>
          <Typography variant="caption" color="secondary.dark">
            목표 {goal.toLocaleString()}원
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ReportCategorySummary;
