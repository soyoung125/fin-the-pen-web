import CalendarHeader, { CalendarHeaderProps } from "./CalendarHeader.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "Home/ScheduleCalendar/CalendarHeader",
  component: CalendarHeader,
  tags: ["autodocs"],
  args: { date: "2024-10-06", count: 10 },
  argTypes: {},
} satisfies Meta<typeof CalendarHeader>;

export default meta;

export const Default = (args: CalendarHeaderProps) => {
  return <CalendarHeader {...args} />;
};
