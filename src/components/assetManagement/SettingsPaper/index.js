import { Stack, Box, Paper } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import assetManagements from '../../../domain/constants/managements';

function SettingsPaper() {
  return (
    <Stack>
      {assetManagements.map((s) => (
        <Paper
          elevation={8}
          sx={{
            marginY: 1, padding: 2, borderRadius: 3,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ fontWeight: 'bold' }}>{s.title}</Box>
            <KeyboardArrowRightIcon />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}

export default SettingsPaper;
