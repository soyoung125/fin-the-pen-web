import type { Meta } from "@storybook/react";
import CategoryButton, { CategoryButtonProps } from "./CategoryButton";

const meta = {
  title: "ui/ScheduleDrawer/CategoryButton",
  component: CategoryButton,
  tags: ["autodocs"],
  args: { category: "카테고리", selected: true },
  argTypes: {},
} satisfies Meta<typeof CategoryButton>;

export default meta;

export const Default = (args: CategoryButtonProps) => {
  return (
    <div style={{ width: "500px" }}>
      <CategoryButton {...args} />
    </div>
  );
};
