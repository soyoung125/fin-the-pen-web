import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export interface PredictBoxProps {
  title: string;
  titleIcon: ReactNode;
  amount: number;
  navigateIcon?: ReactNode;
  handleClick?: () => void;
}

function PredictBox({
  handleClick,
  navigateIcon,
  titleIcon,
  title,
  amount,
}: PredictBoxProps) {
  return (
    <Stack
      p="16px"
      bgcolor="#735BF21A"
      borderRadius="8px"
      gap="16px"
      width="100%"
    >
      <Box color="primary.main">{titleIcon}</Box>
      <Stack gap="18x">
        <Typography fontSize="16px">{title}</Typography>
        <Stack direction="row" gap="4px" alignItems="center">
          <Typography fontSize="18px" color="primary">
            {amount.toLocaleString()}원
          </Typography>
          <Box color="primary.main" onClick={handleClick} display="flex">
            {navigateIcon}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default PredictBox;
