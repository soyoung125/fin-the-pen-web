import MonthlyExpenditureTargetCard from "@pages/Home/next-components/HomeHeader/MonthlyExpenditureTarget/MonthlyExpenditureTargetCard.tsx";

function MonthlyExpenditureTarget() {
  /**
   * TODO: TanStack Query을 활용해서 사용자의 이름과 이번달 목표 지출 금액을 가져옵니다.
   */
  return <MonthlyExpenditureTargetCard amount={0} userName={""} />;
}

export default MonthlyExpenditureTarget;
