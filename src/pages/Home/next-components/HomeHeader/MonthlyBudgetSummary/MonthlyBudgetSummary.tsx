import { Stack, Typography } from "@mui/material";
import { SummaryContainer, SummaryItem } from "./MonthBudgetSummary.styles.ts";
import SummaryCard from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/SummaryCard";

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
  ];
  const useable = {
    title: "사용 가능 금액",
    amount: availableAmount,
  };

  return (
    //<Stack bgcolor="#735BF2" borderRadius="12px" p="16px" gap="6px">
    <SummaryContainer>
      <SummaryItem>
        {budgetList.map(({ title, amount }) => (
          <SummaryCard title={title} amount={amount} />
        ))}
      </SummaryItem>
      <SummaryItem $useable={true}>
        <SummaryCard title={useable.title} amount={useable.amount} />
      </SummaryItem>
    </SummaryContainer>
    //</Stack>
  );
}

export default MonthlyBudgetSummary;
