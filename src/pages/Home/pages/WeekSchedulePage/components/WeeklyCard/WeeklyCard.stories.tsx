import WeeklyCard, {
  WeeklyCardProps,
} from "@pages/Home/pages/WeekSchedulePage/components/WeeklyCard/WeeklyCard.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "Home/WeekSchedulePage/WeeklyCard",
  component: WeeklyCard,
  tags: ["autodocs"],
  args: {
    weeklyData: {
      week_of_number: "1주차",
      period: "period",
      plus: 10000,
      minus: 1000,
    },
    isThisWeek: true,
    isThisMonth: true,
  },
  argTypes: {},
} satisfies Meta<typeof WeeklyCard>;

export default meta;

export const Default = (args: WeeklyCardProps) => {
  return <WeeklyCard {...args} />;
};
