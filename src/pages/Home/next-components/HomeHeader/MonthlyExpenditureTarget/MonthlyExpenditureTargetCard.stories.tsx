import { Meta } from "@storybook/react";
import MonthlyExpenditureTargetCard, {
  MonthlyExpenditureTargetCardProps,
} from "./MonthlyExpenditureTargetCard.tsx";

const meta = {
  title: "Home/HomeHeader/MonthlyExpenditureTargetCard",
  component: MonthlyExpenditureTargetCard,
  args: {},
  argTypes: {},
} satisfies Meta<typeof MonthlyExpenditureTargetCard>;

export default meta;

export const Default = (args: MonthlyExpenditureTargetCardProps) => (
  <MonthlyExpenditureTargetCard {...args} />
);
