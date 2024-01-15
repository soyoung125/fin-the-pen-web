import PredictReport, { PredictReportProps } from "./PredictReport.tsx";
import { Meta } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "reports/Report/PredictReport",
  component: PredictReport,
  tags: ["autodocs"],
  args: {
    selected: "used",
    month: 5,
    goal: 99999999,
    used: 9999999,
    predict: 99999999,
    useable: 9999999,
  },
  argTypes: {
    goal: {
      description: "사용 목표 금액을 의미합니다.",
    },
    used: {
      description: "사용한 금액을 의미합니다.",
    },
    predict: {
      description: "사용 예정 금액을 의미합니다.",
    },
    useable: {
      description: "사용가능한 금액을 의미합니다.",
    },
  },
} satisfies Meta<typeof PredictReport>;

export default meta;

export const Default = (args: PredictReportProps) => {
  return <PredictReport {...args} />;
};

export const Example = () => {
  const [selected, setSelected] = useState("used");
  return (
    <PredictReport
      selected={selected}
      setSelected={setSelected}
      month={5}
      goal={9999999}
      predict={99999}
      used={9999}
      useable={999}
    />
  );
};
