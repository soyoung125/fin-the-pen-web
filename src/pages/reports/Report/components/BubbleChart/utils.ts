import { Bubble } from "./BubbleChart.tsx";
import { CategoryReport } from "@app/types/report.ts";

/**
 * 서로 겹치지 않게 랜덤으로 버블을 생성합니다.
 * 버블의 사이즈가 너무 커서 배치가 불가능하면 앱이 중단되니, 조심히 사용 바랍니다. (추후 개선 예정)
 * @param bubbleTemplates
 */
export const generateRandomBubbles = (
  bubbleTemplates: Omit<Bubble, "x" | "y">[]
) => {
  let generatedBubbles: Bubble[] = [];
  const isOverlapped = (x: number, y: number, r: number) => {
    for (const bubble of generatedBubbles) {
      const distance = Math.sqrt(
        Math.pow(bubble.x - x, 2) + Math.pow(bubble.y - y, 2)
      );
      if (distance < bubble.r + r) {
        return true;
      }
    }
    return false;
  };
  while (generatedBubbles.length < bubbleTemplates.length) {
    const bubbleTemplate = bubbleTemplates[generatedBubbles.length];
    const background = bubbleTemplate.background;
    const color = bubbleTemplate.color;
    const r = bubbleTemplate.r;
    const generatedX = Math.floor(Math.random() * 100);
    const generatedY = Math.floor(Math.random() * 100);
    const x = generatedX + r > 100 ? generatedX - r - 1 : generatedX;
    const y = generatedY + r > 100 ? generatedY - r - 1 : generatedY;
    const title = bubbleTemplate.title;
    const subtitle = bubbleTemplate.subtitle;
    if (isOverlapped(x, y, r)) {
      generatedBubbles = [];
    } else {
      generatedBubbles.push({
        x,
        y,
        r,
        title,
        subtitle,
        background,
        color,
      });
    }
  }
  return generatedBubbles;
};

export const generateRandomBubbles2 = (bubbleItems: CategoryReport[]) => {
  const generatedBubbles: Bubble[] = [];

  bubbleItems.forEach((bubbleItem, index) => {
    const bubbleTemplate = bubble[index];

    const { background, color, r, x, y } = bubbleTemplate;
    const title = bubbleItem.category;
    const subtitle = bubbleItem.rate;
    generatedBubbles.push({
      x,
      y,
      r,
      title,
      subtitle,
      background,
      color,
    });
  });

  return generatedBubbles;
};

export const bubble: Pick<Bubble, "x" | "y" | "r" | "background" | "color">[] =
  [
    {
      x: 5,
      y: 10,
      r: 44,
      background: "linear-gradient(140deg, #E4E0FF 13.75%, #B4A8FF 86.75%)",
      color: "#280EB1",
    },
    {
      x: 35,
      y: 50,
      r: 37,
      background: "linear-gradient(140deg, #CFEBFF 13.75%, #7BC8FF 86.75%)",
      color: "#004FAC",
    },
    {
      x: 52,
      y: 13,
      r: 30,
      background: "linear-gradient(140deg, #D4FFE7 13.75%, #6DFFAE 86.75%)",
      color: "#047223",
    },
    {
      x: 8,
      y: 57,
      r: 24,
      background: "linear-gradient(140deg, #FFF4C6 13.75%, #FFE36D 86.75%)",
      color: "#CE4911",
    },
    {
      x: 71,
      y: 40,
      r: 24,
      background: "linear-gradient(140deg, #FFE7F4 13.75%, #FFBFE2 86.75%)",
      color: "#B20000",
    },
  ];
