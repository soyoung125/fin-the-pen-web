import { Stack, Typography } from "@mui/material";
import { ProgressBar } from "./ProgressBar.ts";
import { colorOfRank } from "./color.ts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap="8px" alignItems="center">
          <Typography fontSize="16px">{rank}위</Typography>
          <Typography fontSize="14px">{title}</Typography>
        </Stack>
        <Stack direction="row" gap="8px" alignItems="center">
          <Typography fontSize="14px">{amount.toLocaleString()}원</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
        </Stack>
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
