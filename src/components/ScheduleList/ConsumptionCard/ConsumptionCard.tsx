import { Avatar, Box, Stack, Typography } from "@mui/material";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import { AmountComponent, AmountType } from "./ConsumptionCard.styles.ts";
import moment from "moment";
import { Schedule } from "@app/types/schedule.ts";
import { getPriceTypeSign } from "@components/ScheduleDrawer/hooks/useScheduleForm.ts";

export interface ConsumptionCardProps {
  schedule: Schedule;
  isRepeat: boolean;
  onClick: () => void;
  icon?: boolean;
}

function ConsumptionCard({
  schedule,
  isRepeat,
  onClick,
  icon,
}: ConsumptionCardProps) {
  const isPredict = moment().isBefore(schedule.end_date, "day");
  const isSpend = schedule.price_type === "-";

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1.5}
      p={2}
      onClick={onClick}
    >
      {icon && (
        <Avatar
          // alt="Remy Sharp"
          // src="/static/images/avatar/1.jpg"
          sx={{ width: 36, height: 36 }}
        >
          category
        </Avatar>
      )}
      <Stack
        justifyContent="space-between"
        sx={{ flexGrow: 1, height: "48px" }}
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography fontSize="13px" fontWeight={500}>
            {schedule.start_date}-{schedule.end_date}
          </Typography>
          {isRepeat && <RepeatRoundedIcon color="success" fontSize="small" />}
        </Stack>

        <Typography variant="h4">{schedule.event_name}</Typography>
      </Stack>

      <Box height={48}>
        <AmountComponent $isPredict={isPredict}>
          <AmountType $isPredict={isPredict} $isSpend={isSpend}>
            {getPriceTypeSign(schedule.price_type)}
          </AmountType>
          {Number(schedule.amount).toLocaleString()}
        </AmountComponent>
      </Box>
    </Stack>
  );
}

export default ConsumptionCard;
