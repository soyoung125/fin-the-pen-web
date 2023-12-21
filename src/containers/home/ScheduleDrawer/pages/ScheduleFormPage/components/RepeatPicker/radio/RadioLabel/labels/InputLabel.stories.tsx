import type { Meta } from "@storybook/react";
import { useState } from "react";
import InputLabel, { InputLabelProps } from "./InputLabel";

const meta = {
  title: "ui/ScheduleDrawer/repeat-picker/radio/RadioLabel/InputLabel",
  component: InputLabel,
  tags: ["autodocs"],
  args: {
    value: "1",
    preInputLabel: "총",
    postInputLabel: "번 반복",
    max: 100,
  },
  argTypes: {},
} satisfies Meta<typeof InputLabel>;

export default meta;

export const Default = (args: InputLabelProps) => {
  return (
    <div style={{ width: "500px" }}>
      <InputLabel {...args} />
    </div>
  );
};

export const Dynamic = () => {
  const [value, setValue] = useState("1");
  return (
    <div style={{ width: "500px" }}>
      <InputLabel
        value={value}
        handleUpdate={(value: string) => setValue(value)}
        postInputLabel={"일 마다"}
        max={365}
      />
    </div>
  );
};
