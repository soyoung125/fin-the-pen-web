import ConsumptionHeader, {
  ConsumptionHeaderProps,
} from "@components/ScheduleList/ConsumptionHeader/ConsumptionHeader.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "ScheduleList/ConsumptionHeader",
  component: ConsumptionHeader,
  tags: ["autodocs"],
  args: { date: "2024-01-29" },
  argTypes: {},
} satisfies Meta<typeof ConsumptionHeader>;

export default meta;

export const Default = (args: ConsumptionHeaderProps) => {
  return <ConsumptionHeader {...args} />;
};
