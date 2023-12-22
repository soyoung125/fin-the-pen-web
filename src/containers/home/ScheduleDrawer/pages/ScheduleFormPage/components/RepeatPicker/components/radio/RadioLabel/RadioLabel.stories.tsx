import type { Meta } from "@storybook/react";
import { useState } from "react";
import RadioLabel from ".";
import { RadioLabelProps } from "./RadioLabel";

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
