import type { Meta } from "@storybook/react";
import CategoryButton from "./CategoryButton";

const meta = {
  title: "ui/ScheduleDrawer/CategoryButton",
  component: CategoryButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryButton>;

export default meta;

export const Default = () => {
  return <CategoryButton />;
};
