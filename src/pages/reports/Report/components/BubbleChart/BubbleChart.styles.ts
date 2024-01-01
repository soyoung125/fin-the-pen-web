import styled from "@emotion/styled";

export const BubbleChartContainer = styled.div`
  border: 1px solid #ccc;
  width: 100vw;
  height: 100vw;
  position: relative;
`;

interface CircleProps {
  $x: number;
  $y: number;
  $r: number;
}

export const Circle = styled.div<CircleProps>`
  position: absolute;
  background-color: aquamarine;
  border-radius: 50%;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  width: ${({ $r }) => $r}%;
  height: ${({ $r }) => $r}%;
`;
