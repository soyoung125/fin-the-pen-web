import {
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { OPTIONS } from "@pages/reports/Report/components/PredictReport/DoughnutChart/utils.ts";
import { useRef, MouseEvent } from "react";
import * as React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DoughnutChartProps {
  labels: string[];
  datas: number[];
  bgColors: string[];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

function DoughnutChart({
  labels,
  datas,
  bgColors,
  setSelected,
}: DoughnutChartProps) {
  const chartRef = useRef();
  const data = {
    labels: labels,
    datasets: [
      {
        label: "predict report",
        data: datas,
        backgroundColor: bgColors,
        borderWidth: 0,
      },
    ],
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (chartRef.current) {
      console.log(getDatasetAtEvent(chartRef.current, event));
      const element = getElementAtEvent(chartRef.current, event);
      setSelected(labels[element[0].index]);
    }
  };

  return (
    <Doughnut ref={chartRef} data={data} options={OPTIONS} onClick={onClick} />
  );
}

export default DoughnutChart;
