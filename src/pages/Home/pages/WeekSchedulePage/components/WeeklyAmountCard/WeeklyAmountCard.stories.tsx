import { Meta } from "@storybook/react";
import WeeklyAmountCard, {
  WeeklyAmountCardProps,
} from "@pages/Home/pages/WeekSchedulePage/components/WeeklyAmountCard/WeeklyAmountCard.tsx";

const meta = {
  title: "Home/WeekSchedulePage/WeeklyAmountCard",
  component: WeeklyAmountCard,
  tags: ["autodocs"],
  args: { isIncome: true, amount: 10000 },
  argTypes: {},
} satisfies Meta<typeof WeeklyAmountCard>;

export default meta;

export const Default = (args: WeeklyAmountCardProps) => {
  return <WeeklyAmountCard {...args} />;
};
