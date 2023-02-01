import { Box, CardActionArea, Grid } from '@mui/material';

function SettingCard({ setting }) {
  return (
    <Grid item xs={6}>
      <CardActionArea>
        <Box sx={{
          height: '120px',
          backgroundColor: setting.color,
          paddingX: 1,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          {setting.title}
        </Box>
      </CardActionArea>
    </Grid>
  );
}

export default SettingCard;
