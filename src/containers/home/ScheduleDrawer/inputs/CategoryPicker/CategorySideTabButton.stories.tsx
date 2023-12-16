import type { Meta } from "@storybook/react";
import CategoryButton, { CategoryButtonProps } from "./CategoryButton";
import { useState } from "react";
import CategorySideTabButton from "./CategorySideTabButton.tsx";

const meta = {
  title: "ui/ScheduleDrawer/CategorySideTabButton",
  component: CategorySideTabButton,
  tags: ["autodocs"],
  args: { onClick: () => {} },
  argTypes: {},
} satisfies Meta<typeof CategorySideTabButton>;

export default meta;

export const Default = (args: CategoryButtonProps) => {
  return (
    <div style={{ width: "500px" }}>
      <CategorySideTabButton {...args} />
    </div>
  );
};
