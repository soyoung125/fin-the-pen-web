import { Box, Stack, Typography } from "@mui/material";
import { Button, TodayButtonConainer } from "./TodayButton.styles";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export interface TodayButtonProps {
  goToday: () => void;
}

function TodayButton({ goToday }: TodayButtonProps) {
  return (
    <TodayButtonConainer onClick={goToday}>
      <Button>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="h6" lineHeight="22px">
            오늘
          </Typography>
          <ArrowForwardIosRoundedIcon sx={{ fontSize: "12px" }} />
        </Stack>
      </Button>
    </TodayButtonConainer>
  );
}

export default TodayButton;
