import { Stack, Typography } from "@mui/material";

export interface MonthlyBudgetSummaryProps {
  income: number;
  expenditure: number;
  availableAmount: number;
}

function MonthlyBudgetSummary({
  expenditure,
  income,
  availableAmount,
}: MonthlyBudgetSummaryProps) {
  const budgetList = [
    {
      title: "수입",
      amount: income,
    },
    {
      title: "지출",
      amount: expenditure,
    },
    {
      title: "사용 가능 금액",
      amount: availableAmount,
    },
  ];
  return (
    <Stack bgcolor="#735BF2" borderRadius="12px" p="16px" gap="6px">
      {budgetList.map(({ title, amount }) => (
        <Stack key={title} direction="row" justifyContent="space-between">
          <Typography fontSize="14px" color="#FFFFFF">
            {title}
          </Typography>
          <Typography fontSize="16px" color="#FFFFFF">
            {amount.toLocaleString()}원
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default MonthlyBudgetSummary;
