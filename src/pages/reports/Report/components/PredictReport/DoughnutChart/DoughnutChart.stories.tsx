import { Meta } from "@storybook/react";
import DoughnutChart, { DoughnutChartProps } from "./DoughnutChart.tsx";
import { useState } from "react";
import { getColors } from "@pages/reports/Report/components/PredictReport/DoughnutChart/utils.ts";
import { LABELS } from "@pages/reports/Report/components/PredictReport/utils.ts";
import EmptyDoughnutChart from "@pages/reports/Report/components/PredictReport/DoughnutChart/EmptyDoughnutChart.tsx";
import * as React from "react";

const meta = {
  title: "reports/Report/PredictReport/DoughnutChart",
  component: DoughnutChart,
  tags: ["autodocs"],
  args: {
    labels: ["goal", "predict", "useable"],
    datas: [99999, 999999, 99999],
    bgColors: ["#735BF2", "#FF769F", "#0075FF"],
  },
  argTypes: {},
} satisfies Meta<typeof DoughnutChart>;

export default meta;

export const Default = (args: DoughnutChartProps) => {
  return <DoughnutChart {...args} />;
};

export const Example = () => {
  const [selected, setSelected] = useState("goal");
  const datas = [99999, 999999, 99999];
  const colors = getColors(selected);

  return (
    <DoughnutChart
      labels={LABELS}
      datas={datas}
      bgColors={colors}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

export const Empty = () => {
  return <EmptyDoughnutChart />;
};
