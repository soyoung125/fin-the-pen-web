import { Meta } from "@storybook/react";
import ReportCard, { ReportCardProps } from "./ReportCard.tsx";

const meta = {
  title: "reports/ReportDetails/ReportCard",
  component: ReportCard,
  tags: ["autodocs"],
  args: { rank: 0, title: "식비", amount: 71000, maxPercent: 20, percent: 20 },
  argTypes: {},
} satisfies Meta<typeof ReportCard>;

export default meta;

export const Default = (args: ReportCardProps) => {
  return <ReportCard {...args} />;
};
