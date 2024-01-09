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
          <Stack alignItems="center">
            <Typography
              fontSize={`${bubble.r / 20}rem`}
              lineHeight={1}
              textAlign={"center"}
            >
              {bubble.title}
            </Typography>
            {bubble.subtitle && (
              <Typography
                fontSize={`${bubble.r / 25}rem`}
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
