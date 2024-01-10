import { Meta } from "@storybook/react";
import ReportTitle, { ReportTitleProps } from "./ReportTitle.tsx";
import { useState } from "react";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";

const meta = {
  title: "reports/Report/ReportTitle",
  component: ReportTitle,
  tags: ["autodocs"],
  args: { year: 2023, month: 5, amount: 1000000, pickMonth: () => alert("hi") },
  argTypes: {},
} satisfies Meta<typeof ReportTitle>;

export default meta;

export const Default = (args: ReportTitleProps) => {
  return (
    <div style={{ width: "500px", background: "#F7F7F8" }}>
      <ReportTitle {...args} />
    </div>
  );
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
    <div style={{ width: "500px", background: "#F7F7F8" }}>
      <ReportTitle
        year={year}
        month={month}
        amount={333000000}
        pickMonth={pickMonth}
      />
    </div>
  );
};
