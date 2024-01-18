import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getOptions } from "@pages/reports/Report/components/MonthlyReport/LineChart/utils.ts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export interface LineChartProps {
  labels: string[];
  datas: number[];
}

function LineChart({ labels, datas }: LineChartProps) {
  const max = Math.max(...datas);
  const min = Math.min(...datas);

  const data = {
    labels,
    datasets: [
      {
        data: datas,
        borderColor: "#735BF2",
        backgroundColor: "#fff",
        pointRadius: 5,
        pointBorderWidth: 3,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Line
      options={getOptions(max, min)}
      data={data}
      plugins={[ChartDataLabels]}
    />
  );
}

export default LineChart;
