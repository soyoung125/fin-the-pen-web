import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

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

  const options = {
    responsive: true,
    events: [],
    scales: {
      x: {
        beginAtZero: true,
        offset: true,
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
      },
    },
    plugins: {
      datalabels: {
        backgroundColor: "#43464C",
        color: "#fff",
        borderRadius: 4,
        font: {
          weight: 500,
        },
        formatter: (value: any) => {
          if (value === max) return "최대";
          if (value === min) return "최저";
          return `${value.toLocaleString()}원`;
        },
        padding: 6,
        align: (context: any) => {
          const index = context.dataIndex;
          const datasets = context.chart.data.datasets;
          const data = datasets[0].data[index];
          const invert1 = max - data;
          const invert2 = data - min;
          return invert1 > invert2 ? "end" : "start";
        },
        offset: 10,
      },
    },
    layout: {
      padding: {
        top: 32,
        right: 16,
        bottom: 16,
        left: 8,
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

  return <Line options={options} data={data} plugins={[ChartDataLabels]} />;
}

export default LineChart;
