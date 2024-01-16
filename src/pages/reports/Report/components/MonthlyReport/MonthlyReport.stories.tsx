import MonthlyReport, {
  MonthlyReportProps,
} from "@pages/reports/Report/components/MonthlyReport/MonthlyReport.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "reports/Report/MonthlyReport",
  component: MonthlyReport,
  tags: ["autodocs"],
  args: {
    month: 5,
    spending: 600000,
    previousSpending: 400000,
    twoMonthsAgoSpending: 500000,
  },
  argTypes: {},
} satisfies Meta<typeof MonthlyReport>;

export default meta;

export const Default = (args: MonthlyReportProps) => {
  return <MonthlyReport {...args} />;
};
