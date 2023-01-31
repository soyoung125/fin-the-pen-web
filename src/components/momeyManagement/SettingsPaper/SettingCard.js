import { Box, Grid } from '@mui/material';

function SettingCard({ setting }) {
  return (
    <Grid item xs={6}>
      <Box sx={{
        backgroundColor: setting.color, paddingY: 5, borderRadius: 4,
      }}
      >
        {setting.title}
      </Box>
    </Grid>
  );
}

export default SettingCard;
