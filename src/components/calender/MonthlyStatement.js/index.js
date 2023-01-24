import {
  Box,
  Grid, Paper, Stack, Typography,
} from '@mui/material';

function MonthlyStatement() {
  return (
    <Box mx={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Stack>
              <Typography>수입</Typography>
              <Typography>1000000원</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Stack>
              <Typography>지출</Typography>
              <Typography>30000원</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MonthlyStatement;
