import {
  BarChartContainer,
  BarComponent,
} from "@pages/reports/ReportCategoryDetails/components/BarChart/BarChart.styles.ts";

export interface Bar {
  label: string;
  data: number;
  color: string;
}

export interface BarChartProps {
  labels: string[];
  data: number[];
  colors: string[];
  selected: number;
}

function BarChart({ labels, colors, data, selected }: BarChartProps) {
  return (
    <BarChartContainer>
      {data.map((d, idx) => (
        <BarComponent $color={colors[idx]} $width={d}>
          {selected === idx && `${d}%`}
        </BarComponent>
      ))}
    </BarChartContainer>
  );
}

export default BarChart;
