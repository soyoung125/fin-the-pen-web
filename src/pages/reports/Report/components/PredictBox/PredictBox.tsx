import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface PredictBoxProps {
  title: string;
  titleIcon: ReactNode;
  amount: number;
  navigateIcon?: ReactNode;
  navigateTo?: string;
}

function PredictBox({
  navigateTo,
  navigateIcon,
  titleIcon,
  title,
  amount,
}: PredictBoxProps) {
  return (
    <Box p="16px" bgcolor="#735BF21A" borderRadius="8px">
      <Box color="#735BF2">{titleIcon}</Box>
      <Stack>
        <Typography fontSize="16px">{title}</Typography>
        <Typography fontSize="18px" color="#735BF2">
          {amount.toLocaleString()}원
        </Typography>
      </Stack>
    </Box>
  );
}

export default PredictBox;
