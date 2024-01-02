import type { Meta } from "@storybook/react";
import RadioLabel from "./index.tsx";
import { RadioLabelProps } from "./RadioLabel.tsx";

const meta = {
  title: "ui/ScheduleDrawer/repeat-picker/radio/RadioLabel",
  component: RadioLabel,
  tags: ["autodocs"],
  args: {
    value: "is_repeat_again",
    label: "계속 반복",
  },
  argTypes: {},
} satisfies Meta<typeof RadioLabel>;

export default meta;

export const Default = (args: RadioLabelProps) => {
  return (
    <div style={{ width: "500px" }}>
      <RadioLabel {...args} />
    </div>
  );
};
