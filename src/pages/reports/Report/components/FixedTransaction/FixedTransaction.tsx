import { Box, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export interface FixedTransactionProps {
  title: string;
  amount: number;
  month: number;
  difference: number;
}

function FixedTransaction({
  title,
  amount,
  month,
  difference,
}: FixedTransactionProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "secondary.light",
        backgroundColor: "#F7F7F8",
      }}
    >
      <Stack gap="6px">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h2" color="primary">
          {amount.toLocaleString()}원
        </Typography>
      </Stack>

      <Stack>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">{month - 1}월 보다 </Typography>
          {difference < 0 ? (
            <ArrowDropDownIcon color="info" />
          ) : (
            <ArrowDropUpIcon color="error" />
          )}
        </Stack>
        <Typography variant="subtitle2">
          {difference.toLocaleString()}원
        </Typography>
      </Stack>
    </Stack>
  );
}

export default FixedTransaction;
