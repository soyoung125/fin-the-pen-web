import type { Meta } from "@storybook/react";
import CategoryPicker from "./CategoryPicker.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ui/ScheduleDrawer/category-picker/CategoryPicker",
  component: CategoryPicker,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryPicker>;

export default meta;

export const Default = () => {
  return <CategoryPicker setIsCategoryPickerOpen={() => alert("hi")} />;
};
