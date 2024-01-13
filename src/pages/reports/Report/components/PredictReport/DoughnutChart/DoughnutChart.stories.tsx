import { Meta } from "@storybook/react";
import DoughnutChart from "./DoughnutChart.tsx";

const meta = {
  title: "reports/Report/PredictReport/DoughnutChart",
  component: DoughnutChart,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof DoughnutChart>;

export default meta;

export const Default = () => {
  return <DoughnutChart />;
};
