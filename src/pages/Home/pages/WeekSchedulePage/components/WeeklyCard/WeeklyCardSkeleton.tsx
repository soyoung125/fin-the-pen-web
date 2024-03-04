import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import WeeklyAmountCardSkeleton from "../WeeklyAmountCard/WeeklyAmountCardSkeleton";

interface WeeklyCardSkeletonProps {
  week: string;
}

function WeeklyCardSkeleton({ week }: WeeklyCardSkeletonProps) {
  return (
    <Box p={2}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        mb={1}
        height={"24px"}
      >
        <Typography
          variant="h2"
          color="primary.main"
        >{`${week}주차`}</Typography>
        <Typography>
          <Skeleton width="50px" />
        </Typography>
      </Stack>

      <Grid container spacing={1.5}>
        <Grid item xs={6}>
          <WeeklyAmountCardSkeleton isIncome={true} />
        </Grid>
        <Grid item xs={6}>
          <WeeklyAmountCardSkeleton isIncome={false} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default WeeklyCardSkeleton;
