import {
  Stack, Switch, Typography,
} from '@mui/material';

function ExclusionInput({ event, updateExclusion }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Typography>예산에서 제외</Typography>
      <Stack direction="row" alignItems="center">
        <Switch
          id="exclusion"
          checked={event.exclusion}
          value={event.exclusion}
          onChange={updateExclusion}
        />
      </Stack>
    </Stack>
  );
}
export default ExclusionInput;
