import ScheduleHeader, { ScheduleHeaderProps } from "./ScheduleHeader.tsx";
import { Meta } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Home/ScheduleList/ScheduleHeader",
  component: ScheduleHeader,
  tags: ["autodocs"],
  args: { show: false },
  argTypes: {},
} satisfies Meta<typeof ScheduleHeader>;

export default meta;

export const Default = (args: ScheduleHeaderProps) => {
  return <ScheduleHeader {...args} />;
};

export const Example = () => {
  const [show, setShow] = useState(false);

  const handleChange = () => setShow((prevState) => !prevState);

  return <ScheduleHeader show={show} handleChange={handleChange} />;
};
