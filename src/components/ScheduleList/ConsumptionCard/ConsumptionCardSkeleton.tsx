import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { AmountComponent } from "@components/ScheduleList/ConsumptionCard/ConsumptionCard.styles.ts";

function ConsumptionCardSkeleton() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1.5}
      p={2}
    >
      <Skeleton variant="circular" width={36} height={36} />
      <Stack
        justifyContent="space-between"
        sx={{ flexGrow: 1, height: "48px" }}
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography fontSize="13px" fontWeight={500}>
            <Skeleton width="100px" />
          </Typography>
        </Stack>

        <Typography variant="h4">
          <Skeleton width="50px" />
        </Typography>
      </Stack>

      <Box height={48}>
        <AmountComponent $isPredict={false}>
          <Skeleton width="50px" />
        </AmountComponent>
      </Box>
    </Stack>
  );
}

export default ConsumptionCardSkeleton;
