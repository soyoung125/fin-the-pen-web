import {
  BarChartContainer,
  BarComponent,
  BarLabelBox,
  BarLabelComponent,
  BarLabelContainer,
  LabelLine,
} from "@pages/reports/ReportCategoryDetails/components/BarChart/BarChart.styles.ts";
import { Dispatch, SetStateAction } from "react";
import { getTitle } from "./utils.ts";

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
    <>
      <BarLabelContainer>
        {values.map((v, idx) => (
          <BarLabelComponent $width={data[idx]} onClick={() => setSelected(v)}>
            <BarLabelBox $isSelected={selected === v}>
              {getTitle(v)}
            </BarLabelBox>
            <LabelLine $isSelected={selected === v} />
          </BarLabelComponent>
        ))}
      </BarLabelContainer>

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
    </>
  );
}

export default BarChart;
