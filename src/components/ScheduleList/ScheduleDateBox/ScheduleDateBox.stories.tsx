import ScheduleDateBox, {
  ConsumptionHeaderProps,
} from "@components/ScheduleList/ScheduleDateBox/ScheduleDateBox.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "ScheduleList/ScheduleDateBox",
  component: ScheduleDateBox,
  tags: ["autodocs"],
  args: { date: "2024-01-29" },
  argTypes: {},
} satisfies Meta<typeof ScheduleDateBox>;

export default meta;

export const Default = (args: ConsumptionHeaderProps) => {
  return <ScheduleDateBox {...args} />;
};
