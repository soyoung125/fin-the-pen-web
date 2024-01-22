export const getOptions = (max: number, min: number) => {
  return {
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
        backgroundColor: (context: any) => {
          const data = context.dataset.data[context.dataIndex];
          if (data === 0) return "#A9ACB2";
          return "#43464C";
        },
        color: "#fff",
        borderRadius: 8,
        font: {
          size: 10,
          weight: 500,
        },
        padding: 6,
        offset: 10,
        formatter: (value: any) => {
          if (value === 0) return "데이터 없음";
          return `${value.toLocaleString()}원`;
        },
        align: (context: any) => {
          const index = context.dataIndex;
          const datasets = context.chart.data.datasets;
          const data = datasets[0].data[index];
          const invert1 = max - data;
          const invert2 = data - min;
          return invert1 > invert2 ? "end" : "start";
        },
      },
    },
  };
};
