import { Stack, Typography } from "@mui/material";
import RoundedButton from "@components/common/RoundedButton.tsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import * as React from "react";

export interface TopNavigationBarProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>, value: unknown) => void;
}

function TopNavigationBar({ title, onClick }: TopNavigationBarProps) {
  return (
    <Stack gap={1} direction="row" px="20px" py="12px" alignItems="center">
      <RoundedButton value="arrow-back-ios-icon" onClick={onClick}>
        <ArrowBackIosIcon />
      </RoundedButton>

      <Typography variant="h4">{title}</Typography>
    </Stack>
  );
}

export default TopNavigationBar;
