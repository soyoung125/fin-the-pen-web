import { Meta } from "@storybook/react";
import MonthlyExpenditureTargetCard, {
  MonthlyExpenditureTargetCardProps,
} from "./MonthlyExpenditureTargetCard.tsx";

const meta = {
  title: "Home/HomeHeader/MonthlyExpenditureTargetCard",
  component: MonthlyExpenditureTargetCard,
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
