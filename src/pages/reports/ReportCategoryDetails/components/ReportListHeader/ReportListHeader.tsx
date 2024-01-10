import { Stack, Typography } from "@mui/material";
import SelectMenus from "@components/common/SelectMenus";
import * as React from "react";

export interface ReportListHeaderProps {
  count: number;
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

function ReportListHeader({
  count,
  options,
  selectedOption,
  setSelectedOption,
}: ReportListHeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2.5}
    >
      <Typography>총 {count}건</Typography>
      <SelectMenus
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </Stack>
  );
}

export default ReportListHeader;
