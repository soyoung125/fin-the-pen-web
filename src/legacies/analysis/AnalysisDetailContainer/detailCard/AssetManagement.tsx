/* eslint-disable no-mixed-operators */
import { Box, LinearProgress, Stack } from "@mui/material";
import RoundedPaper from "../../../../components/common/RoundedPaper";
import { useLocation } from "react-router-dom";

interface AssetManagementProps {
  spending: number;
  asset: number;
  balance: number;
  title: string;
}

function AssetManagement({
  spending,
  asset,
  balance,
  title,
}: AssetManagementProps) {
  const { state } = useLocation();
  const { color } = state;
  return (
    <RoundedPaper my={2}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ fontSize: "17px", fontWeight: "bolder" }}>{title}</Box>
        <Box>
          {`${Math.abs(balance).toLocaleString("ko-KR")}원 `}
          {balance > 0 ? "남음" : "초과"}
        </Box>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={balance > 0 ? (spending / asset) * 100 : 100}
        sx={{
          height: "10px",
          borderRadius: "10px",
          backgroundColor: "rgba(216, 216, 216, 0.62)",
          my: 1,
          ".MuiLinearProgress-bar1Determinate": {
            borderRadius: "10px",
            backgroundColor: color,
          },
        }}
      />

      <Stack direction="row" justifyContent="space-between">
        <Box>{`${spending.toLocaleString("ko-KR")}원 지출`}</Box>
        <Box sx={{ color: "#979797" }}>{`예산 ${asset.toLocaleString(
          "ko-KR"
        )}원`}</Box>
      </Stack>
    </RoundedPaper>
  );
}

export default AssetManagement;
