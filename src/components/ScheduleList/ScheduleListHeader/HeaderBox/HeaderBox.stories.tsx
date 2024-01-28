import { Meta } from "@storybook/react";
import HeaderBox from "./HeaderBox.tsx";

const meta = {
  title: "ScheduleList/ScheduleListHeader/HeaderBox",
  component: HeaderBox,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof HeaderBox>;

export default meta;

export const Default = () => {
  return <HeaderBox>header box</HeaderBox>;
};
