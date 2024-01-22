import { getAmount } from "@pages/reports/Report/components/PredictReport/utils.ts";

export const OPTIONS = {
  events: ["click" as const, "blur" as const],
  responsive: true,
  cutout: 60,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      padding: {
        x: 10,
        y: 6,
      },
      caretSize: 0,
      cornerRadius: 8,
      titleFont: {
        size: 12,
        weight: 600,
      },
      bodyFont: {
        size: 12,
        weight: 600,
      },
      backgroundColor: "#fff",
      titleColor: (context: any) => {
        const item = context.tooltip.dataPoints[0];
        return item.dataset.backgroundColor[item.dataIndex];
      },
      displayColors: false,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.07)",
      callbacks: {
        title: (item: any) => {
          return getTitle(item[0].label);
        },
        label: (item: any) => {
          const count = item.dataset.data[item.dataIndex];
          return getAmount(count);
        },
        labelTextColor: () => {
          return "#000";
        },
      },
    },
  },
};

const getTitle = (label: string) => {
  switch (label) {
    case "used":
      return "지출 금액";
    case "predict":
      return "지출 예정";
    case "useable":
      return "사용 가능 금액";
    default:
      return "";
  }
};

export const getColors = (label: string) => {
  switch (label) {
    case "used":
      return ["#735BF2", "#AEAEAE", "#ECECEC"];
    case "predict":
      return ["#C8CBD0", "#FF769F", "#ECECEC"];
    case "useable":
      return ["#C8CBD0", "#ECECEC", "#0075FF"];
    default:
      return ["#735BF2", "#FF769F", "#0075FF"];
  }
};
