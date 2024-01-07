import { Skeleton, Stack, Typography } from "@mui/material";

export default function MonthlyExpenditureTargetCardSkeleton() {
  return (
    <Stack>
      <Typography fontSize="15px">
        <Skeleton width="200px" />
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography fontSize="20px" fontWeight={700}>
          <Skeleton width="100px" />
        </Typography>
        <Skeleton variant="circular" width="20px" height="20px" />
      </Stack>
    </Stack>
  );
}
