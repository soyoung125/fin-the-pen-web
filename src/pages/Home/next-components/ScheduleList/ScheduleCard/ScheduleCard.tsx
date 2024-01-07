import { Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export interface ScheduleCardProps {
  time: string;
  amount: number;
  description: string;
}

function ScheduleCard({ amount, description, time }: ScheduleCardProps) {
  return (
    <Stack p="16px" gap="6px" sx={{ borderBottom: "1px solid #F7F7F8" }}>
      <Stack direction="row" justifyContent="space-between" color="#5B5F67">
        <Stack direction="row" alignItems="center">
          <AccessTimeIcon sx={{ fontSize: "12px" }} />
          <Typography fontSize="13px">{time}</Typography>
        </Stack>
        <Typography fontSize="12px">
          {amount > 0 && "+"}
          {amount.toLocaleString()}
        </Typography>
      </Stack>
      <Typography fontSize="16px">{description}</Typography>
    </Stack>
  );
}

export default ScheduleCard;
