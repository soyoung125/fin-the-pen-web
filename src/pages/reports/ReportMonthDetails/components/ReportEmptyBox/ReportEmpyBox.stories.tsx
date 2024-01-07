import {Meta} from "@storybook/react";
import ReportEmptyBox from "@pages/reports/ReportMonthDetails/components/ReportEmptyBox";

const meta = {
  title: "reports/ReportMonthDetails/ReportEmpty",
  component: ReportEmptyBox,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ReportEmptyBox>;

export default meta;

export const Default = () => {
  return <ReportEmptyBox/>;
};
