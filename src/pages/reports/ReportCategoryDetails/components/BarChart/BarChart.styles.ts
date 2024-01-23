import styled from "@emotion/styled";
import { Bar } from "@pages/reports/ReportCategoryDetails/components/BarChart/BarChart.tsx";

export const BarChartContainer = styled.div`
  height: 24px;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
`;

export const BarComponent = styled.div<{
  $width: Bar["data"];
  $color: Bar["color"];
}>`
  width: ${({ $width }) => $width}%;
  height: 22px;
  color: #fff;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 12px;
  font-weight: 600;
  margin: auto;
  padding-right: 10px;
`;
