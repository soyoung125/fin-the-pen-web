import { Meta } from "@storybook/react";
import ReportCard, { ReportCardProps } from "./ReportCard.tsx";
import { Stack } from "@mui/material";

const meta = {
  title: "reports/ReportMonthDetails/ReportCard",
  component: ReportCard,
  tags: ["autodocs"],
  args: { rank: 0, title: "식비", amount: 71000, maxPercent: 20, percent: 20 },
  argTypes: {},
} satisfies Meta<typeof ReportCard>;

export default meta;

export const Default = (args: ReportCardProps) => {
  return <ReportCard {...args} />;
};

export const Example = () => {
  const list = [
    {
      amount: 71000,
      percent: 20,
      title: "식비",
    },
    {
      amount: 71000,
      percent: 12,
      title: "미용",
    },
    {
      amount: 71000,
      percent: 8,
      title: "자동차",
    },
    {
      amount: 71000,
      percent: 7,
      title: "패션/쇼핑",
    },
    {
      amount: 71000,
      percent: 6,
      title: "카페",
    },
    {
      amount: 71000,
      percent: 5,
      title: "식비",
    },
    {
      amount: 71000,
      percent: 4,
      title: "식비",
    },
  ];
  const maxPercent = Math.max(...list.map((l) => l.percent));
  return (
    <Stack gap="14px">
      {list.map((l, i) => (
        <ReportCard
          key={i}
          rank={i + 1}
          amount={l.amount}
          maxPercent={maxPercent}
          title={l.title}
          percent={l.percent}
        />
      ))}
    </Stack>
  );
};
