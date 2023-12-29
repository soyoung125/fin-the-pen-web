import { Box, Stack, Typography } from "@mui/material";

export interface ConsumptionCardProps {
  name: string;
  price: number;
  date: string;
  balance: number;
  cardCompany: string; // 이거 필요한건가요?
}

function ConsumptionCard({
  balance,
  price,
  name,
  date,
  cardCompany,
}: ConsumptionCardProps) {
  return (
    <Box px="20px" py="16px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize="15px">{name}</Typography>
        <Typography fontSize="15px" color="#735BF2">
          - {price.toLocaleString()}원
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize="12px" color="#5B5F67">
          {date} | {cardCompany}
        </Typography>
        <Typography fontSize="14px" color="#8C919C">
          {balance.toLocaleString()}원
        </Typography>
      </Stack>
    </Box>
  );
}

export default ConsumptionCard;
