import BarChart, { BarChartProps } from "./BarChart.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "reports/ReportCategoryDetails/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  args: {
    labels: ["현재", "예정", "잔액"],
    data: [55, 10, 35],
    colors: ["#735BF2", "#DEE0E3", "#F7F7F8"],
    selected: 0,
  },
  argTypes: {},
} satisfies Meta<typeof BarChart>;

export default meta;

export const Default = (args: BarChartProps) => {
  return <BarChart {...args} />;
};
