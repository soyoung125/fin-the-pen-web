import { Meta } from "@storybook/react";
import ReportMonthTitle, {
  ReportMonthTitleProps,
} from "./ReportMonthTitle.tsx";
import { useState } from "react";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";

const meta = {
  title: "reports/ReportMonthDetails/ReportMonthTitle",
  component: ReportMonthTitle,
  tags: ["autodocs"],
  args: {
    year: 2023,
    month: 5,
    onClickLeftIcon: () => alert("하단의 State 예제를 사용해주세요."),
    onClickMonth: () => alert("하단의 State 예제를 사용해주세요."),
    onClickRightIcon: () => alert("하단의 State 예제를 사용해주세요."),
  },
  argTypes: {},
} satisfies Meta<typeof ReportMonthTitle>;

export default meta;

export const Default = (args: ReportMonthTitleProps) => {
  return <ReportMonthTitle {...args} />;
};

export const State = () => {
  const [yearMonth, setYearMonth] = useState("2023-5");
  const [year, month] = yearMonth.split("-").map((s) => Number(s));
  const { openMonthPicker } = useDatePicker();
  const addMonth = () => {
    setYearMonth(month >= 12 ? `${year + 1}-${1}` : `${year}-${month + 1}`);
  };

  const subtractMonth = () => {
    setYearMonth(month <= 1 ? `${year - 1}-${12}` : `${year}-${month - 1}`);
  };

  const pickMonth = async () => {
    const newMonth = await openMonthPicker(yearMonth);
    setYearMonth(newMonth.format("YYYY-MM"));
  };

  return (
    <ReportMonthTitle
      year={year}
      month={month}
      onClickLeftIcon={subtractMonth}
      onClickMonth={pickMonth}
      onClickRightIcon={addMonth}
    />
  );
};
