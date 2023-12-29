import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import SelectMenus from "@components/common/SelectMenus/SelectMenus.tsx";

function ReportCategoryDetails() {
  const count = 10; // tanstack query 연동 예정
  const options = ["최신순", "과거순", "높은 금액순", "낮은 금액순"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>총 {count}건</Typography>
        <SelectMenus
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Stack>
    </>
  );
}

export default ReportCategoryDetails;
