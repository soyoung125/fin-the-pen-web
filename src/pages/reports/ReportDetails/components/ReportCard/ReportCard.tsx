import { Stack, Typography } from "@mui/material";
import { ProgressBar } from "./ProgressBar.ts";
import { colorOfRank } from "./color.ts";

export interface ReportCardProps {
  rank: number;
  title: string;
  amount: number;
  maxPercent: number;
  percent: number;
}

function ReportCard({
  amount,
  maxPercent,
  percent,
  rank,
  title,
}: ReportCardProps) {
  const { color, bgColor } = colorOfRank(rank);
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row">
          <Typography>{rank}위</Typography>
          <Typography>{title}</Typography>
        </Stack>
        <Typography>{amount}원</Typography>
      </Stack>
      <ProgressBar
        color={color}
        bgColor={bgColor}
        max={maxPercent}
        value={percent}
      />
    </Stack>
  );
}

export default ReportCard;
