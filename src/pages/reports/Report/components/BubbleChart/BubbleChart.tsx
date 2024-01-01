import { BubbleChartContainer, BubbleComponent } from "./BubbleChart.styles.ts";
import { Stack, Typography } from "@mui/material";

export interface Bubble {
  x: number;
  y: number;
  r: number;
  backgroundColor?: string;
  title: string;
  subtitle?: string;
}

export interface BubbleChartProps {
  bubbles: Bubble[];
}

function BubbleChart({ bubbles }: BubbleChartProps) {
  return (
    <BubbleChartContainer>
      {bubbles.map((bubble, index) => (
        <BubbleComponent
          key={index}
          $x={bubble.x}
          $y={bubble.y}
          $r={bubble.r}
          $backgroundColor={bubble.backgroundColor}
        >
          <Stack alignItems="center">
            <Typography fontSize={`${bubble.r / 10}rem`} lineHeight={1}>
              {bubble.title}
            </Typography>
            {bubble.subtitle && (
              <Typography fontSize={`${bubble.r / 15}rem`} lineHeight={1}>
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
