import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";

export interface ConsumptionHeaderProps {
  date: string;
}

function ConsumptionHeader({ date }: ConsumptionHeaderProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" px={2.5} py={1}>
      <Typography variant="h2">{moment(date).format("M월 D일")}</Typography>

      {moment().isSame(date, "day") && (
        <Box
          px="6px"
          bgcolor="success.main"
          color="white"
          borderRadius="9px"
          fontSize="12px"
          fontWeight={600}
        >
          오늘
        </Box>
      )}
    </Stack>
  );
}

export default ConsumptionHeader;
