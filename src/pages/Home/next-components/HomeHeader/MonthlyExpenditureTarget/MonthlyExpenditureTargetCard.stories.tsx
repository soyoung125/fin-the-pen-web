import { Meta } from "@storybook/react";
import MonthlyExpenditureTargetCard, {
  MonthlyExpenditureTargetCardProps,
} from "./MonthlyExpenditureTargetCard.tsx";
import MonthlyExpenditureTargetCardSkeleton from "@pages/Home/next-components/HomeHeader/MonthlyExpenditureTarget/MonthlyExpenditureTargetCardSkeleton.tsx";
import { useState } from "react";

const meta = {
  title: "Home/HomeHeader/MonthlyExpenditureTargetCard",
  component: MonthlyExpenditureTargetCard,
  tags: ["autodocs"],
  args: {
    yyyyMM: "2021-10",
    amount: 1200000,
    userName: "오민하",
  },
  argTypes: {},
} satisfies Meta<typeof MonthlyExpenditureTargetCard>;

export default meta;

export const Default = (args: MonthlyExpenditureTargetCardProps) => (
  <MonthlyExpenditureTargetCard {...args} />
);

export const Skeleton = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {isLoaded ? (
        <MonthlyExpenditureTargetCard
          amount={10000}
          yyyyMM={"2020-02"}
          userName={"오민하"}
        />
      ) : (
        <MonthlyExpenditureTargetCardSkeleton />
      )}
      <button onClick={() => setIsLoaded(!isLoaded)}>로딩 상태 전환하기</button>
    </>
  );
};
