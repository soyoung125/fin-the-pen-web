import {Skeleton, Stack, Typography} from "@mui/material";

function ReportCardSkeleton() {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap="8px" alignItems="center">
          <Typography fontSize="16px"><Skeleton width="21px"/></Typography>
          <Typography fontSize="16px"><Skeleton width="21px"/></Typography>
        </Stack>
        <Stack direction="row" gap="8px" alignItems="center">
          <Typography fontSize="14px"><Skeleton width="16px"/></Typography>
          <Skeleton variant="circular" width="16px" sx={{fontSize: '14px'}}/>
        </Stack>
      </Stack>
      <Skeleton variant="rounded" height="24px"/>
    </Stack>
  )
}

export default ReportCardSkeleton;
