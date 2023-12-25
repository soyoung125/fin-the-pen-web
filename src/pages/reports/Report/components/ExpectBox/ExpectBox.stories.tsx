import { Meta } from "@storybook/react";
import ExpectBox, { ExpectBoxProps } from "./ExpectBox.tsx";

const meta = {
  title: "reports/Report/ExpectBox",
  component: ExpectBox,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ExpectBox>;

export default meta;

export const Default = (args: ExpectBoxProps) => {
  return <ExpectBox {...args} />;
};
