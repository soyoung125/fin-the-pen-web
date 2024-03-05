import Calendar from "./Calendar.tsx";
import { Meta } from "@storybook/react";
import { useState } from "react";
import moment from "moment";

const meta = {
  title: "Home/MonthSchedulePage/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  args: { value: "2024-01-30" },
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;

export const Example = () => {
  const [value, setValue] = useState("2024-01-30");

  const handleChange = (newValue: moment.Moment | null) =>
    newValue && setValue(newValue.format("YYYY-MM-DD"));

  return <Calendar value={value} handleChange={handleChange} />;
};
