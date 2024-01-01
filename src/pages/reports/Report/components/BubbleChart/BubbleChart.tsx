import { BubbleChartContainer, Circle } from "./BubbleChart.styles.ts";

export interface BubbleChartProps {}

function BubbleChart({}: BubbleChartProps) {
  return (
    <BubbleChartContainer>
      <Circle $x={10} $y={10} $r={10} />
    </BubbleChartContainer>
  );
}

export default BubbleChart;
