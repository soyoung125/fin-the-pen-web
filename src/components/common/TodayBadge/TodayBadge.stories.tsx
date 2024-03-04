import TodayBadge from "@components/common/TodayBadge/TodayBadge.tsx";
import { Meta } from "@storybook/react";

const meta = {
  title: "common/TodayBadge",
  component: TodayBadge,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof TodayBadge>;

export default meta;

export const Default = () => {
  return <TodayBadge />;
};
