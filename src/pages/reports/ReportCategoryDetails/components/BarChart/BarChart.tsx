import {
  BarChartContainer,
  BarComponent,
} from "@pages/reports/ReportCategoryDetails/components/BarChart/BarChart.styles.ts";
import { Dispatch, SetStateAction } from "react";

export interface Bar {
  label: string;
  data: number;
  color: string;
}

export interface BarChartProps {
  values: string[];
  data: number[];
  colors: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

function BarChart({
  values,
  colors,
  data,
  selected,
  setSelected,
}: BarChartProps) {
  return (
    <BarChartContainer>
      {data.map((d, idx) => (
        <BarComponent
          $color={colors[idx]}
          $width={d}
          onClick={() => setSelected(values[idx])}
        >
          {selected === values[idx] && `${d}%`}
        </BarComponent>
      ))}
    </BarChartContainer>
  );
}

export default BarChart;
