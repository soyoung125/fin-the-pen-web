import { Meta } from "@storybook/react";
import BubbleChart, { Bubble, BubbleChartProps } from "./BubbleChart.tsx";
import { useState } from "react";

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

export const MultipleBubbles = () => {
  const generateRandomBubbles = (count: number) => {
    let bubbles: Bubble[] = [];
    const isOverlapped = (x: number, y: number, r: number) => {
      for (const bubble of bubbles) {
        const distance = Math.sqrt(
          Math.pow(bubble.x - x, 2) + Math.pow(bubble.y - y, 2)
        );
        if (distance < bubble.r + r) {
          return true;
        }
      }
      return false;
    };
    while (bubbles.length < count) {
      const r = 25 - bubbles.length * 5;
      const generatedX = Math.floor(Math.random() * 100);
      const generatedY = Math.floor(Math.random() * 100);
      const x = generatedX + r > 100 ? generatedX - r - 1 : generatedX;
      const y = generatedY + r > 100 ? generatedY - r - 1 : generatedY;
      const title = "title";
      const subtitle = "subtitle";
      if (isOverlapped(x, y, r)) {
        bubbles = [];
      }
      bubbles.push({ x, y, r, title, subtitle });
    }
    return bubbles;
  };

  const [bubbles, setBubbles] = useState<Bubble[]>(generateRandomBubbles(5));
  return (
    <>
      <BubbleChart bubbles={bubbles} />
      <button onClick={() => setBubbles(generateRandomBubbles(5))}>
        Generate
      </button>
    </>
  );
};
