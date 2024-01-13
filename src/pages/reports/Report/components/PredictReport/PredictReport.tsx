import { Box, Stack, Typography } from "@mui/material";

export interface PredictReportProps {
  goal: number;
  predict?: number;
  used: number;
}

function PredictReport({ goal, predict, used }: PredictReportProps) {
  return (
    <Stack spacing={3}>
      <Typography fontSize="18px">
        이번 달 지출 목표액{" "}
        <span style={{ color: "#735BF2", fontWeight: 700 }}>
          {goal.toLocaleString()}
        </span>
      </Typography>

      <Box>그래프</Box>

      <Box>리스트</Box>
    </Stack>
  );
}

export default PredictReport;
