import { Bubble } from "./BubbleChart.tsx";

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
