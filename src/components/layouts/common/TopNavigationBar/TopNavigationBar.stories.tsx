import { Meta } from "@storybook/react";
import TopNavigationBar, { TopNavigationBarProps } from "./TopNavigationBar";

const meta = {
  title: "common/TopNavigationBar",
  component: TopNavigationBar,
  tags: ["autodocs"],
  args: { onClick: () => alert("clicked!"), title: "제목이 들어올 자리" },
  argTypes: {},
} satisfies Meta<typeof TopNavigationBar>;

export default meta;

export const Default = (args: TopNavigationBarProps) => {
  return (
    <div style={{ width: "500px" }}>
      <TopNavigationBar {...args} />
    </div>
  );
};

export const NoneTitle = () => {
  return (
    <div style={{ width: "500px" }}>
      <TopNavigationBar onClick={() => alert("clicked")} />
    </div>
  );
};
