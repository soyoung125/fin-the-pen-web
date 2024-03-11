import { Stack, Typography } from "@mui/material";
import { REPORTTYPE } from "@pages/reports/Report/components/PredictReport/utils.ts";
import * as React from "react";
import EmptyDoughnutChart from "@pages/reports/Report/components/PredictReport/DoughnutChart/EmptyDoughnutChart.tsx";
import EmptyPredictReportCard from "@pages/reports/Report/components/PredictReport/PredictReportCard/EmptyPredictReportCard.tsx";

interface EmptyPredictReportProps {
  month: number;
}

function EmptyPredictReport({ month }: EmptyPredictReportProps) {
  const selected = "used";
  return (
    <Stack spacing={3}>
      <Typography fontSize="18px">
        이번 달 지출 목표액{" "}
        <span style={{ color: "#735BF2", fontWeight: 700 }}>??만 ????원</span>
      </Typography>

      <EmptyDoughnutChart />

      <Stack>
        {REPORTTYPE.map((type) => (
          <EmptyPredictReportCard
            key={type.type}
            month={month}
            type={type}
            selected={selected === type.type}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default EmptyPredictReport;
