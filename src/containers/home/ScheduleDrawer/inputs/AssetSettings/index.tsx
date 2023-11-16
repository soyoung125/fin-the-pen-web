import { Card, Divider, Stack } from "@mui/material";
import ExclusionInput from "./ExclusionInput";
import ImportanceInput from "./ImportanceInput";
import SpendingInput from "./SpendingInput";

function AssetSettings({ mode }: { mode: string }) {
  return (
    <Stack spacing={2}>
      <SpendingInput mode={mode} />

      <Divider />

      <ImportanceInput />

      <Divider />

      <ExclusionInput />
    </Stack>
  );
}

export default AssetSettings;
