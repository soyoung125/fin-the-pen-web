import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "transparent",
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        display: false,
        grid: {
          color: "transparent",
        },
      },
    },
  };

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
  return <Line options={options} data={data} />;
}

export default LineChart;
