import {
  SummaryContainer,
  SummaryItem,
} from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/MonthBudgetSummary.styles.ts";
import SummaryCardSkeleton from "@pages/Home/next-components/HomeHeader/MonthlyBudgetSummary/SummaryCard/SummaryCardSkeleton.tsx";

interface MonthlyBudgetSummarySkeletonProps {
  dayTitle?: string;
  showPredict?: boolean;
  expect?: boolean;
}

function MonthlyBudgetSummarySkeleton({
  dayTitle,
  showPredict,
  expect,
}: MonthlyBudgetSummarySkeletonProps) {
  const budget = {
    income: "수입",
    expend: "지출",
  };

  const predict = {
    availableAmount: "사용가능액",
    expect: "지출예정액",
  };
  return (
    <>
      <SummaryContainer>
        <SummaryItem>
          <SummaryCardSkeleton
            title={`${dayTitle ? dayTitle : "이번달"} ${budget.income}`}
          />
          <SummaryCardSkeleton
            title={`${dayTitle ? dayTitle : "이번달"} ${budget.expend}`}
          />
        </SummaryItem>

        {showPredict && (
          <SummaryItem $useable={true}>
            {expect && <SummaryCardSkeleton title={predict.expect} />}
            <SummaryCardSkeleton title={predict.availableAmount} />
          </SummaryItem>
        )}
      </SummaryContainer>
    </>
  );
}

export default MonthlyBudgetSummarySkeleton;
