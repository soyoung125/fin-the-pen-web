import { Box, Stack, Typography } from "@mui/material";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import { AmountComponent, AmountType } from "./ConsumptionCard.styles.ts";
import moment from "moment";
import { TodaySchedule } from "@app/types/schedule.ts";

export interface ConsumptionCardProps {
  name: string;
  price: number;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  isRepeat: boolean;
  onClick: () => void;
}

function ConsumptionCard({
  type,
  price,
  name,
  date,
  startTime,
  endTime,
  isRepeat,
  onClick,
}: ConsumptionCardProps) {
  const isPredict = moment().isBefore(date, "day");
  const isSpend = type === "-";

  return (
    <Stack spacing={1} px={2.5} py={2} onClick={onClick}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography fontSize="13px" fontWeight={500}>
            {startTime}-{endTime}
          </Typography>
          {isRepeat && <RepeatRoundedIcon color="success" fontSize="small" />}
        </Stack>
        {/*<Typography*/}
        {/*  variant="subtitle2"*/}
        {/*  color={type === "-" ? "error.main" : "info.main"}*/}
        {/*>*/}
        {/*  {type}*/}
        {/*  {price.toLocaleString()}*/}
        {/*</Typography>*/}
        <AmountComponent $isPredict={isPredict}>
          <AmountType $isPredict={isPredict} $isSpend={isSpend}>
            {type}
          </AmountType>
          {price.toLocaleString()}
        </AmountComponent>
      </Stack>
      <Typography variant="h4">{name}</Typography>
    </Stack>
  );
}

export default ConsumptionCard;
