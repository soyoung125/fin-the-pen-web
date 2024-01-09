import { Meta } from "@storybook/react";
import ScheduleCard, { ScheduleCardProps } from "./ScheduleCard.tsx";

const meta = {
  title: "Home/ScheduleList/ScheduleCard",
  component: ScheduleCard,
  tags: ["autodocs"],
  args: {
    amount: 100000,
    description: "주황버섯이랑 영화보기 ",
    time: "12:00 ~ 13:00",
  },
  argTypes: {},
} satisfies Meta<typeof ScheduleCard>;

export default meta;

export const Default = (args: ScheduleCardProps) => <ScheduleCard {...args} />;
