import { Box, Stack, Typography } from "@mui/material";
import {
  getAmount,
  ReportTypeInterface,
} from "@pages/reports/Report/components/PredictReport/utils.ts";
import * as React from "react";

export interface EmptyPredictReportCardProps {
  month: number;
  type: ReportTypeInterface;
  selected: boolean;
}

function EmptyPredictReportCard({
  month,
  type,
  selected,
}: EmptyPredictReportCardProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py="11px"
      sx={{ opacity: selected ? 1 : 0.3 }}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Box
          width={12}
          height={12}
          borderRadius={100}
          border={3}
          sx={{ color: type.color }}
        />
        <Typography variant="subtitle1">
          {type.overTitle ? type.overTitle : `${month}${type.title}`}
        </Typography>
      </Stack>

      <Typography variant="subtitle2">?,???,???원</Typography>
    </Stack>
  );
}

export default EmptyPredictReportCard;
