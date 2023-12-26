import { Button, Stack, Typography } from "@mui/material";

export interface ReportCategoryListHeaderProps {}

function ReportCategoryListHeader({}: ReportCategoryListHeaderProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography>총 n건</Typography>
      <Button>최신순</Button>
    </Stack>
  );
}

export default ReportCategoryListHeader;
