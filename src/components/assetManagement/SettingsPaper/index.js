import { Grid, Paper } from '@mui/material';
import assetManagements from '../../../utils/constants/managements';
import SettingCard from './SettingCard';

function SettingsPaper() {
  return (
    <Paper
      elevation={8}
      sx={{
        marginTop: 2, marginBottom: 5, padding: 2, textAlign: 'center', borderRadius: 3,
      }}
    >
      <Grid container spacing={2} alignItems="stretch">
        {assetManagements.map((s) => (
          <SettingCard setting={s} key={Math.random()} />
        ))}
      </Grid>
    </Paper>
  );
}

export default SettingsPaper;
