import { Meta } from "@storybook/react";
import ScheduleCard, { ScheduleCardProps } from "./ScheduleCard.tsx";

const meta = {
  title: "Home/HomeHeader/ScheduleCard",
  component: ScheduleCard,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ScheduleCard>;

export default meta;

export const Default = (args: ScheduleCardProps) => <ScheduleCard {...args} />;
