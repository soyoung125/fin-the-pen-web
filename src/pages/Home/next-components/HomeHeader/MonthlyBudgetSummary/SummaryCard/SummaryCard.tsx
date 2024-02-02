import { Stack, Typography } from "@mui/material";

export interface SummaryCardProps {
  title: string;
  amount: number;
}

function SummaryCard({ title, amount }: SummaryCardProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography fontSize="14px" fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="h3">{amount.toLocaleString()}원</Typography>
    </Stack>
  );
}

export default SummaryCard;
