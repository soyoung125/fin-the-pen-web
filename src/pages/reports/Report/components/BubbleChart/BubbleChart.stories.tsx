import { Meta } from "@storybook/react";
import BubbleChart, { BubbleChartProps } from "./BubbleChart.tsx";

const meta = {
  title: "reports/Report/BubbleChart",
  component: BubbleChart,
  tags: ["autodocs"],
  args: {
    bubbles: [
      {
        x: 10,
        y: 10,
        r: 10,
        title: "title",
        subtitle: "subtitle",
      },
    ],
  },
  argTypes: {
    bubbles: {
      control: {
        type: "array",
      },
      description: `x, y, r는 %로 관리됩니다. 0~100 사이의 값을 넣어주세요.
      \n x, y는 원의 중심을 의미합니다.
      \n r은 원의 반지름을 의미합니다.
      \n backgroundColor는 원의 배경색을 의미합니다.
      \n title은 원 안에 들어갈 텍스트를 의미합니다.
      \n subtitle은 원 안에 들어갈 부제목을 의미합니다.`,
    },
  },
} satisfies Meta<typeof BubbleChart>;

export default meta;

export const Default = (args: BubbleChartProps) => {
  return (
    <div style={{ width: "500px" }}>
      <BubbleChart {...args} />
    </div>
  );
};
