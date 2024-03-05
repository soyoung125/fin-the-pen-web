import { Skeleton, Stack, Typography } from "@mui/material";

interface SummaryCardSkeletonProps {
  title: string;
}

function SummaryCardSkeleton({ title }: SummaryCardSkeletonProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography fontSize="14px" fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="h3">
        <Skeleton width="100px" />
      </Typography>
    </Stack>
  );
}

export default SummaryCardSkeleton;
