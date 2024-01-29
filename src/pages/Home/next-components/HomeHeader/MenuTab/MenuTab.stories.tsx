import MenuTab, { MenuTabProps } from "./MenuTab.tsx";
import { Meta } from "@storybook/react";
import { SyntheticEvent, useState } from "react";

const meta = {
  title: "Home/HomeHeader/MenuTab",
  component: MenuTab,
  tags: ["autodocs"],
  args: { value: 0, labels: ["first", "second", "third"] },
  argTypes: {},
} satisfies Meta<typeof MenuTab>;

export default meta;

export const Default = (args: MenuTabProps) => {
  return <MenuTab {...args} />;
};

export const Example = () => {
  const labels = ["월 별", "주 별", "일 별"];
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <MenuTab labels={labels} value={value} handleChange={handleChange} />;
};
