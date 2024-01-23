import { Box, Stack, Typography } from "@mui/material";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

export interface ConsumptionCardProps {
  name: string;
  price: number;
  startTime: string;
  endTime: string;
  type: string;
  isRepeat: boolean;
}

function ConsumptionCard({
  type,
  price,
  name,
  startTime,
  endTime,
  isRepeat,
}: ConsumptionCardProps) {
  return (
    <Stack spacing={1} px={2.5} py={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography fontSize="13px" fontWeight={500}>
            {startTime}-{endTime}
          </Typography>
          {isRepeat && <RepeatRoundedIcon color="success" fontSize="small" />}
        </Stack>
        <Typography
          variant="subtitle2"
          color={type === "-" ? "error.main" : "info.main"}
        >
          {type}
          {price.toLocaleString()}
        </Typography>
      </Stack>
      <Typography variant="h4">{name}</Typography>
    </Stack>
  );
}

export default ConsumptionCard;
