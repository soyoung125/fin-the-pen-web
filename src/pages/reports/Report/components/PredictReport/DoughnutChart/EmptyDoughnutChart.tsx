import { Doughnut } from "react-chartjs-2";
import {
  getColors,
  OPTIONS,
} from "@pages/reports/Report/components/PredictReport/DoughnutChart/utils.ts";
import { Box } from "@mui/material";
import * as React from "react";
import { LABELS } from "@pages/reports/Report/components/PredictReport/utils.ts";

function EmptyDoughnutChart() {
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "predict report",
        data: [10200, 10000, 5000],
        backgroundColor: getColors("used"),
        borderWidth: 0,
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box px={5}>
        <Doughnut data={data} options={OPTIONS} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          bottom: "0",
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 90.29%)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFF",
            border: "1px solid #DEE0E3",
            borderRadius: "8px",
            marginY: "auto",
            paddingX: "40px",
            paddingY: "12px",
            fontSize: "12px",
            fontWeight: 600,
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
        >
          {`지출 금액을 등록하여\n금액을 확인해보세요.`}
        </Box>
      </Box>
    </Box>
  );
}

export default EmptyDoughnutChart;
