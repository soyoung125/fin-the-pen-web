import LineChart, { LineChartProps } from "./LineChart.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "reports/Report/MonthlyReport/LineChart",
  component: LineChart,
  tags: ["autodocs"],
  args: { labels: ["3월", "4월", "5월"], datas: [500000, 400000, 600000] },
  argTypes: {},
} satisfies Meta<typeof LineChart>;

export default meta;

export const Default = (args: LineChartProps) => {
  return <LineChart {...args} />;
};
