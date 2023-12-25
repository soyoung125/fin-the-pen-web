import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export interface PredictBoxProps {
  title: string;
  titleIcon: ReactNode;
  amount: number;
  navigateIcon?: ReactNode;
  navigateTo?: `/${string}`;
}

function PredictBox({
  navigateTo,
  navigateIcon,
  titleIcon,
  title,
  amount,
}: PredictBoxProps) {
  const navigate = useNavigate();

  return (
    <Stack
      onClick={() => navigateTo && navigate(navigateTo)}
      p="16px"
      bgcolor="#735BF21A"
      borderRadius="8px"
      gap="16px"
      width="100%"
    >
      <Box color="#735BF2">{titleIcon}</Box>
      <Stack gap="18x">
        <Typography fontSize="16px">{title}</Typography>
        <Stack direction="row" gap="4px">
          <Typography fontSize="18px" color="#735BF2">
            {amount.toLocaleString()}원
          </Typography>
          <Box color="#735BF2">{navigateIcon}</Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default PredictBox;
