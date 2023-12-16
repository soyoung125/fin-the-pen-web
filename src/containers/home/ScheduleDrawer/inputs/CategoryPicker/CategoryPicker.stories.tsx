import type { Meta } from "@storybook/react";
import CategoryPicker from "./CategoryPicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ui/ScheduleDrawer/CategoryPicker",
  component: CategoryPicker,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryPicker>;

export default meta;

export const Default = () => {
  return <CategoryPicker />;
};
