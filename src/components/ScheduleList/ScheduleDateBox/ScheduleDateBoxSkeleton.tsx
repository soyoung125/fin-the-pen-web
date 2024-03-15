import { Skeleton, Stack, Typography } from "@mui/material";
import moment from "moment/moment";
import { ConsumptionHeaderProps } from "@components/ScheduleList/ScheduleDateBox/ScheduleDateBox.tsx";

function ScheduleDateBoxSkeleton({ date, count }: ConsumptionHeaderProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" px={2.5} py={2}>
      <Typography variant="h2">
        <Skeleton width="50px" />
      </Typography>

      {count && (
        <Typography variant="h4" color="#8C919C">
          <Skeleton width="50px" />
        </Typography>
      )}

      {moment().isSame(date, "day") && <Skeleton width="50px" />}
    </Stack>
  );
}

export default ScheduleDateBoxSkeleton;
