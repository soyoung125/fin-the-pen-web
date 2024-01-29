import { Meta } from "@storybook/react";
import ReportCategorySummary, {
  ReportCategorySummaryProps,
} from "./ReportCategorySummary.tsx";
import { useState } from "react";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";

const meta = {
  title: "reports/ReportCategoryDetails/ReportCategorySummary",
  component: ReportCategorySummary,
  tags: ["autodocs"],
  args: {
    goal: 1000000,
    amount: 750000,
    category: "식비",
    data: [10, 55, 35],
  },
  argTypes: {},
} satisfies Meta<typeof ReportCategorySummary>;

export default meta;

export const Default = (args: ReportCategorySummaryProps) => {
  return <ReportCategorySummary {...args} />;
};

export const Example = () => {
  const [yearMonth, setYearMonth] = useState("2023-5");
  const [year, month] = yearMonth.split("-").map((s) => Number(s));
  const { openMonthPicker } = useDatePicker();

  const pickMonth = async () => {
    const newMonth = await openMonthPicker(yearMonth);
    setYearMonth(newMonth.format("YYYY-MM"));
  };

  return (
    <ReportCategorySummary
      goal={1000000}
      amount={750000}
      category="식비"
      data={[10, 55, 35]}
    />
  );
};
