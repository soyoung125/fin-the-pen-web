import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

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
      spacing={2}
      width="100%"
    >
      <Box color="primary.main" height="28px">
        {titleIcon}
      </Box>
      <Stack spacing="18x">
        <Typography fontSize="16px">{title}</Typography>
        <Stack direction="row" spacing="4px" alignItems="center">
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
