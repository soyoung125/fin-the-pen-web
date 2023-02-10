import { Grid } from '@mui/material';

function CenterBox({ children }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        {children}
      </Grid>
    </Grid>
  );
}
export default CenterBox;
