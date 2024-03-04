import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import TodayBadge from "@components/common/TodayBadge";

export interface ConsumptionHeaderProps {
  date: string;
}

function ConsumptionHeader({ date }: ConsumptionHeaderProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" px={2.5} py={1}>
      <Typography variant="h2">{moment(date).format("M월 D일")}</Typography>

      {moment().isSame(date, "day") && <TodayBadge />}
    </Stack>
  );
}

export default ConsumptionHeader;
