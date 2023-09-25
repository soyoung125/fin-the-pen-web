import type { Meta, StoryObj } from "@storybook/react";

import TestBox from "./TestBox.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Test/TestBox",
  component: TestBox,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TestBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "테스트 박스 1",
    children: (
      <div>
        <div>테스트를 한다다</div>
        <button type="button">그냥 버튼</button>
      </div>
    ),
  },
};
