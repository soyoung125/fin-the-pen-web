import { Meta } from "@storybook/react";
import MonthlyBudgetSummary, {
  MonthlyBudgetSummaryProps,
} from "./MonthlyBudgetSummary.tsx";

const meta = {
  title: "Home/HomeHeader/MonthlyBudgetSummary",
  component: MonthlyBudgetSummary,
  tags: ["autodocs"],
  args: {
    income: 1200000,
    expenditure: 1000000,
    availableAmount: 200000,
    dayTitle: "이번달",
  },
  argTypes: {
    income: {
      control: {
        type: "number",
      },
      description: "수입",
    },
    expenditure: {
      control: {
        type: "number",
      },
      description: "지출",
    },
    availableAmount: {
      control: {
        type: "number",
      },
      description: "사용 가능 금액",
    },
  },
} satisfies Meta<typeof MonthlyBudgetSummary>;

export default meta;

export const Default = (args: MonthlyBudgetSummaryProps) => (
  <MonthlyBudgetSummary {...args} />
);
