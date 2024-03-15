import { Stack, Typography } from "@mui/material";
import moment from "moment";
import TodayBadge from "@components/common/TodayBadge";

export interface ConsumptionHeaderProps {
  date: string;
  count?: number;
}

function ScheduleDateBox({ date, count }: ConsumptionHeaderProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" px={2.5} py={2}>
      <Typography variant="h2">{moment(date).format("M월 D일")}</Typography>

      {count && (
        <Typography variant="h4" color="#8C919C">
          {count}건
        </Typography>
      )}

      {moment().isSame(date, "day") && <TodayBadge />}
    </Stack>
  );
}

export default ScheduleDateBox;
