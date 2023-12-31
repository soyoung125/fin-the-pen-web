import { Meta } from "@storybook/react";
import BubbleChart, { BubbleChartProps } from "./BubbleChart.tsx";

const meta = {
  title: "reports/Report/BubbleChart",
  component: BubbleChart,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof BubbleChart>;

export default meta;

export const Default = (args: BubbleChartProps) => {
  return <BubbleChart {...args} />;
};
