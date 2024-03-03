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
    <SummaryContainer>
      <SummaryItem>
        {budgetList.map(({ title, amount }) => (
          <SummaryCard key={title} title={title} amount={amount} />
        ))}
      </SummaryItem>

      <SummaryItem $useable={true}>
        <SummaryCard title={useable.title} amount={useable.amount} />
      </SummaryItem>
    </SummaryContainer>
  );
}

export default MonthlyBudgetSummary;
