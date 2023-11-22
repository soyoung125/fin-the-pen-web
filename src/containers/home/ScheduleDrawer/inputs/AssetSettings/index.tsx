import { Card, Stack } from "@mui/material";
import ExclusionInput from "./ExclusionInput";
import ImportanceInput from "./ImportanceInput";
import SpendingInput from "./SpendingInput";
import ThickDivider from "@components/common/ThickDivider";

function AssetSettings({ mode }: { mode: string }) {
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

export default AssetSettings;
