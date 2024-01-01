import { Bubble } from "./BubbleChart.tsx";

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
    const backgroundColor = bubbleTemplate.backgroundColor;
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
        backgroundColor,
      });
    }
  }
  return generatedBubbles;
};
