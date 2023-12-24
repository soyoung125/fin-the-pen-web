import { Meta } from "@storybook/react";
import ReportTitle, {
  ReportTitleProps,
} from "@pages/reports/Report/components/ReportTitle/ReportTitle.tsx";

const meta = {
  title: "reports/Report/ReportTitle",
  component: ReportTitle,
  tags: ["autodocs"],
  args: { year: 2023, month: 5, amount: 1000000 },
  argTypes: {},
} satisfies Meta<typeof ReportTitle>;

export default meta;

export const Default = (args: ReportTitleProps) => {
  return (
    <div style={{ width: "500px", background: "#F7F7F8" }}>
      <ReportTitle {...args} />
    </div>
  );
};
