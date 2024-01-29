import SummaryCard, { SummaryCardProps } from "./SummaryCard.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "Home/HomeHeader/MonthlyBudgetSummary/SummaryCard",
  component: SummaryCard,
  tags: ["autodocs"],
  args: { title: "제목", amount: 100000 },
  argTypes: {},
} satisfies Meta<typeof SummaryCard>;

export default meta;

export const Default = (args: SummaryCardProps) => {
  return <SummaryCard {...args} />;
};
