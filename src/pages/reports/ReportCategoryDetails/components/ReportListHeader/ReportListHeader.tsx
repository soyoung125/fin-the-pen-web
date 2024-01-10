import { Stack, Typography } from "@mui/material";
import SelectMenus from "@components/common/SelectMenus";
import * as React from "react";

export interface ReportListHeaderProps {
  count: number;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

function ReportListHeader({
  count,
  selectedOption,
  setSelectedOption,
}: ReportListHeader) {
  const options = ["최신순", "과거순", "높은 금액순", "낮은 금액순"];

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
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
