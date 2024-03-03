import { BubbleChartContainer, BubbleComponent } from "./BubbleChart.styles.ts";
import { Stack, Typography } from "@mui/material";

export interface Bubble {
  x: number;
  y: number;
  r: number;
  color?: string;
  background?: string;
  title: string;
  subtitle?: string;
}

export interface BubbleChartProps {
  bubbles: Bubble[];
  isBordered?: boolean;
}

function BubbleChart({ bubbles, isBordered }: BubbleChartProps) {
  if (bubbles.length === 0) return <>소비 데이터가 존재하지 않습니다.</>;

  return (
    <BubbleChartContainer $isBordered={isBordered}>
      {bubbles.map((bubble, index) => (
        <BubbleComponent
          key={index}
          $x={bubble.x}
          $y={bubble.y}
          $r={bubble.r}
          $color={bubble.color}
          $background={bubble.background}
        >
          <Stack alignItems="center" spacing={"2px"}>
            <Typography variant="h1" lineHeight={1} textAlign={"center"}>
              {bubble.title}
            </Typography>
            {bubble.subtitle && (
              <Typography
                fontSize={`12px`}
                fontWeight={600}
                lineHeight={1}
                textAlign={"center"}
              >
                {bubble.subtitle}
              </Typography>
            )}
          </Stack>
        </BubbleComponent>
      ))}
    </BubbleChartContainer>
  );
}

export default BubbleChart;
