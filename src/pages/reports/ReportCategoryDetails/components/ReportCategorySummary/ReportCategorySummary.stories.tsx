import { Meta } from "@storybook/react";
import ReportCategorySummary, {
  ReportCategorySummaryProps,
} from "./ReportCategorySummary.tsx";

const meta = {
  title: "reports/ReportCategoryDetails/ReportCategorySummary",
  component: ReportCategorySummary,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ReportCategorySummary>;

export default meta;

export const Default = (args: ReportCategorySummaryProps) => {
  return <ReportCategorySummary {...args} />;
};
