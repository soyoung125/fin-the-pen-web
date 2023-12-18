import { Stack } from "@mui/material";
import ExclusionInput from "./ExclusionInput.tsx";
import ImportanceInput from "./ImportanceInput.tsx";
import SpendingInput from "./SpendingInput.tsx";
import ThickDivider from "@components/common/ThickDivider.tsx";
import { ScheduleDrawerModeValue } from "@type/schedule.tsx";

function AssetFormPage({ mode }: { mode: ScheduleDrawerModeValue }) {
  return (
    <Stack spacing={2}>
      <SpendingInput mode={mode} />
      <ThickDivider />

      <ImportanceInput />
      <ThickDivider />

      <ExclusionInput />
    </Stack>
  );
}

export default AssetFormPage;
