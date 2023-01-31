import { Grid, Paper } from '@mui/material';
import momeyManagementSettings from '../../../utils/constants/settings';
import SettingCard from './SettingCard';

function SettingsPaper() {
  return (
    <Paper sx={{
      marginTop: 2, marginBottom: 5, padding: 2, textAlign: 'center',
    }}
    >
      <Grid container spacing={2}>
        {momeyManagementSettings.map((s) => (
          <SettingCard setting={s} />
        ))}
      </Grid>
    </Paper>
  );
}

export default SettingsPaper;
