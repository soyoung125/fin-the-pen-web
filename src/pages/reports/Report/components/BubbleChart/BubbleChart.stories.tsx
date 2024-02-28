import { Meta } from "@storybook/react";
import BubbleChart, { Bubble, BubbleChartProps } from "./BubbleChart.tsx";
import { useState } from "react";
import {
  generateRandomBubbles,
  generateRandomBubbles2,
} from "@pages/reports/Report/components/BubbleChart/utils.ts";
import { CategoryReport, Report } from "@app/types/report.ts";

const meta = {
  title: "reports/Report/BubbleChart",
  component: BubbleChart,
  tags: ["autodocs"],
  args: {
    bubbles: [
      {
        x: 10,
        y: 10,
        r: 40,
        title: "title",
        subtitle: "subtitle",
        background: "linear-gradient(140deg, #E4E0FF 13.75%, #B4A8FF 86.75%)",
        color: "#280EB1",
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
      \n r은 원의 반지름을 의미합니다. 원 뿐만 아니라 텍스트 크기에도 영향을 줍니다.
      \n background는 원의 배경색을 의미합니다.
      \n color는 원 안에 들어갈 텍스트의 색을 의미합니다.
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
  const bubbleTemplates: Omit<Bubble, "x" | "y">[] = [
    {
      r: 32,
      title: "식비",
      subtitle: "28%",
      background: "linear-gradient(140deg, #E4E0FF 13.75%, #B4A8FF 86.75%)",
      color: "#280EB1",
    },
    {
      r: 24,
      title: "미용",
      subtitle: "20%",
      background: "linear-gradient(140deg, #CFEBFF 13.75%, #7BC8FF 86.75%)",
      color: "#004FAC",
    },
    {
      r: 20,
      title: "자동차",
      subtitle: "18%",
      background: "linear-gradient(140deg, #D4FFE7 13.75%, #6DFFAE 86.75%)",
      color: "#047223",
    },
    {
      r: 16,
      title: "패션쇼핑",
      subtitle: "8%",
      background: "linear-gradient(140deg, #FFF4C6 13.75%, #FFE36D 86.75%)",
      color: "#CE4911",
    },
    {
      r: 16,
      title: "카페",
      subtitle: "7%",
      background: "linear-gradient(140deg, #FFE7F4 13.75%, #FFBFE2 86.75%)",
      color: "#B20000",
    },
  ];

  const [bubbles, setBubbles] = useState<Bubble[]>(
    generateRandomBubbles(bubbleTemplates)
  );

  return (
    <>
      <BubbleChart bubbles={bubbles} isBordered />
      <button
        onClick={() =>
          setBubbles([
            ...generateRandomBubbles(bubbleTemplates).slice(
              0,
              Math.random() * 5 + 1
            ),
          ])
        }
      >
        1~5개의 버블을 랜덤 생성하기
      </button>
      <div>{JSON.stringify(bubbles)}</div>
    </>
  );
};

export const MultipleBubbles2 = () => {
  const list: CategoryReport[] = [
    {
      amount: 71000,
      rate: "20",
      category: "식비",
    },
    {
      amount: 71000,
      rate: "12",
      category: "미용",
    },
    {
      amount: 71000,
      rate: "8",
      category: "자동차",
    },
    {
      amount: 71000,
      rate: "7",
      category: "패션/쇼핑",
    },
    {
      amount: 71000,
      rate: "6",
      category: "카페",
    },
  ];

  const [bubbles, setBubbles] = useState<Bubble[]>(
    generateRandomBubbles2(list)
  );

  return (
    <>
      <BubbleChart bubbles={bubbles} isBordered />
      <button
        onClick={() =>
          setBubbles([
            ...generateRandomBubbles2(list).slice(0, Math.random() * 5 + 1),
          ])
        }
      >
        1~5개의 버블을 랜덤 생성하기
      </button>
      <div>{JSON.stringify(bubbles)}</div>
    </>
  );
};
