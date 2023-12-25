import { Meta } from "@storybook/react";
import ReportMonthTitle, {
  ReportMonthTitleProps,
} from "./ReportMonthTitle.tsx";

const meta = {
  title: "reports/ReportMonthDetails/ReportMonthTitle",
  component: ReportMonthTitle,
  tags: ["autodocs"],
  args: { year: 2023, month: 5 },
  argTypes: {},
} satisfies Meta<typeof ReportMonthTitle>;

export default meta;

export const Default = (args: ReportMonthTitleProps) => {
  return <ReportMonthTitle {...args} />;
};
