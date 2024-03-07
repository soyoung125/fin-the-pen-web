import { Avatar, Box, Stack, Typography } from "@mui/material";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import { AmountComponent, AmountType } from "./ConsumptionCard.styles.ts";
import moment from "moment";

export interface ConsumptionCardProps {
  name: string;
  price: number;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  isRepeat: boolean;
  onClick: () => void;
  icon?: boolean;
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
  icon,
}: ConsumptionCardProps) {
  const isPredict = moment().isBefore(date, "day");
  const isSpend = type === "-";

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
            {startTime}-{endTime}
          </Typography>
          {isRepeat && <RepeatRoundedIcon color="success" fontSize="small" />}
        </Stack>

        <Typography variant="h4">{name}</Typography>
      </Stack>

      <Box height={48}>
        <AmountComponent $isPredict={isPredict}>
          <AmountType $isPredict={isPredict} $isSpend={isSpend}>
            {type}
          </AmountType>
          {price.toLocaleString()}
        </AmountComponent>
      </Box>
    </Stack>
  );
}

export default ConsumptionCard;
