import { Card, Stack } from '@mui/material';
import ExclusionInput from '../inputs/ExclusionInput';
import ImportanceInput from '../inputs/ImportanceInput';
import SpendingInput from '../inputs/SpendingInput';

function AssetSettings({ mode }) {
  return (
    <Stack spacing={1}>
      <Card>
        <SpendingInput mode={mode} />
      </Card>
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
