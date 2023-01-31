import { Box, Grid } from '@mui/material';

function SettingCard({ setting }) {
  return (
    <Grid item xs={6}>
      <Box sx={{
        backgroundColor: setting.color,
        paddingY: 5,
        paddingX: 1,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
      >
        {setting.title}
      </Box>
    </Grid>
  );
}

export default SettingCard;
