import { Card, Stack } from '@mui/material';
import ExclusionInput from '../inputs/ExclusionInput';
import ImportanceInput from '../inputs/ImportanceInput';
import SpendingInput from '../inputs/SpendingInput';

function AssetSettings({
  schedule, setSchedule,
  mode,
}) {
  return (
    <Stack spacing={1}>
      <Card>
        <SpendingInput
          schedule={schedule}
          setSchedule={setSchedule}
          mode={mode}
        />
      </Card>
      <Card>
        <ImportanceInput
          schedule={schedule}
          setSchedule={setSchedule}
        />
      </Card>
      <Card>
        <ExclusionInput
          schedule={schedule}
          setSchedule={setSchedule}
        />
      </Card>
    </Stack>
  );
}

export default AssetSettings;
