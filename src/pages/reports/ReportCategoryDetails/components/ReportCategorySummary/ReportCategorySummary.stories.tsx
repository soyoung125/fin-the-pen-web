import { Meta } from "@storybook/react";
import ReportCategorySummary, {
  ReportCategorySummaryProps,
} from "./ReportCategorySummary.tsx";

const meta = {
  title: "reports/ReportCategoryDetails/ReportCategorySummary",
  component: ReportCategorySummary,
  tags: ["autodocs"],
  args: {
    goal: 1000000,
    amount: 750000,
    category: "식비",
    day: 14,
    month: 5,
    year: 2023,
    onClickDateButton: () => alert("hello"),
  },
  argTypes: {},
} satisfies Meta<typeof ReportCategorySummary>;

export default meta;

export const Default = (args: ReportCategorySummaryProps) => {
  return <ReportCategorySummary {...args} />;
};
