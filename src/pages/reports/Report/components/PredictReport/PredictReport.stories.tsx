import PredictReport, { PredictReportProps } from "./PredictReport.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "reports/Report/PredictReport",
  component: PredictReport,
  tags: ["autodocs"],
  args: {
    goal: 99999999,
    predict: 99999999,
    used: 9999999,
  },
  argTypes: {
    goal: {
      description: "사용 목표 금액을 의미합니다.",
    },
    predict: {
      description: "사용 예정 금액을 의미합니다.",
    },
    used: {
      description: "사용한 금액을 의미합니다.",
    },
  },
} satisfies Meta<typeof PredictReport>;

export default meta;

export const Default = (args: PredictReportProps) => {
  return <PredictReport {...args} />;
};
