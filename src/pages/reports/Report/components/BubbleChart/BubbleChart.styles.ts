import styled from "@emotion/styled";
import { Bubble } from "./BubbleChart.tsx";

export const BubbleChartContainer = styled.div`
  border: 1px solid #ccc;
  width: 100vw;
  height: 100vw;
  position: relative;
`;

export const BubbleComponent = styled.div<{
  $x: Bubble["x"];
  $y: Bubble["y"];
  $r: Bubble["r"];
  $backgroundColor: Bubble["backgroundColor"];
}>`
  position: absolute;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#e6e6e6"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  width: ${({ $r }) => $r}%;
  height: ${({ $r }) => $r}%;
`;
