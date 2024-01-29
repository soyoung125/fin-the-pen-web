import { Box, IconButton, Stack, Typography } from "@mui/material";
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
  navigateIcon,
  titleIcon,
  title,
  amount,
  handleClick,
}: PredictBoxProps) {
  return (
    <Stack p="16px" borderRadius="8px" gap="16px" width="100%">
      <Box color="primary.main">{titleIcon}</Box>
      <Stack gap="12x">
        <Stack direction="row" gap="4px" alignItems="center" height={30}>
          <Typography fontSize="16px">{title}</Typography>
          <IconButton
            sx={{ color: "secondary.dark" }}
            size="small"
            onClick={handleClick}
          >
            {navigateIcon}
          </IconButton>
        </Stack>
        <Typography fontSize="18px" color="primary" fontWeight={500}>
          {amount.toLocaleString()}원
        </Typography>
      </Stack>
    </Stack>
  );
}

export default PredictBox;
