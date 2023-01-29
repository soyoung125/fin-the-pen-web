import { Card, Stack } from '@mui/material';
import ExclusionInput from '../inputs/ExclusionInput';
import ImportanceInput from '../inputs/ImportanceInput';
import SpendingInput from '../inputs/SpendingInput';
import { updateSchedule } from '../utils/schedule';

function AssetSettings({
  schedule, setSchedule, updateSpendingType, updateExclusion, mode,
}) {
  const updateState = (state) => {
    updateSchedule(schedule, setSchedule, state);
  };
  return (
    <Stack spacing={1}>
      <Card>
        <SpendingInput
          schedule={schedule}
          updateSchedule={updateState}
          updateSpendingType={updateSpendingType}
          mode={mode}
        />
      </Card>
      <Card>
        <ImportanceInput
          schedule={schedule}
          updateSchedule={updateState}
        />
      </Card>
      <Card>
        <ExclusionInput
          schedule={schedule}
          updateExclusion={updateExclusion}
        />
      </Card>
    </Stack>
  );
}

export default AssetSettings;
