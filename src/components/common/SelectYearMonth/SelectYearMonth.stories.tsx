import SelectYearMonth, {
  SelectYearMonthProps,
} from "@components/common/SelectYearMonth/SelectYearMonth.tsx";
import { Meta } from "@storybook/react";
import { useState } from "react";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import moment from "moment/moment";

const meta = {
  title: "common/SelectYearMonth",
  component: SelectYearMonth,
  tags: ["autodocs"],
  args: {
    year: 2023,
    month: 5,
    lastMonth: () => alert("last month"),
    nextMonth: () => alert("next month"),
  },
  argTypes: {},
} satisfies Meta<typeof SelectYearMonth>;

export default meta;

export const Default = (args: SelectYearMonthProps) => {
  return <SelectYearMonth {...args} />;
};

const useStorybookMonth = () => {
  const [yearMonth, setYearMonth] = useState("2023-5");
  const [year, month] = yearMonth.split("-").map((s) => Number(s));
  const { openMonthPicker } = useDatePicker();

  const pickMonth = async () => {
    const newMonth = await openMonthPicker(yearMonth);
    setYearMonth(newMonth.format("YYYY-MM"));
  };

  const addMonth = () => {
    const date = moment(yearMonth, "YYYY-MM");
    setYearMonth(date.add(1, "month").format("YYYY-MM"));
  };

  const subtractMonth = () => {
    const date = moment(yearMonth, "YYYY-MM");
    setYearMonth(date.subtract(1, "month").format("YYYY-MM"));
  };

  return {
    month,
    year,
    pickMonth,
    addMonth,
    subtractMonth,
  };
};

export const Example = () => {
  const { year, month, pickMonth, addMonth, subtractMonth } =
    useStorybookMonth();

  return (
    <SelectYearMonth
      year={year}
      month={month}
      lastMonth={subtractMonth}
      nextMonth={addMonth}
      changeYearAndMonth={pickMonth}
    />
  );
};
