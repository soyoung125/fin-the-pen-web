import { Card, Stack } from '@mui/material';
import ExclusionInput from './ExclusionInput';
import ImportanceInput from './ImportanceInput';
import SpendingInput from './SpendingInput';

function AssetSettings({ mode }: {mode: string}) {
  return (
    <Stack spacing={1}>
      <SpendingInput mode={mode} />
      <Card>
        <ImportanceInput />
      </Card>
      <Card>
        <ExclusionInput />
      </Card>
    </Stack>
  );
}

export default AssetSettings;
