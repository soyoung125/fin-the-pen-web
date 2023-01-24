import {
  Box,
  Grid, Paper, Stack, Typography,
} from '@mui/material';
import { lightBlue, pink } from '@mui/material/colors';

function MonthlyStatement() {
  return (
    <Box mx={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              height: 90, borderRadius: 5, padding: 2, backgroundColor: pink[100], color: 'white',
            }}
          >
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>수입</Typography>
              <Box sx={{ textAlign: 'end', fontWeight: 'bold' }}>1000000원</Box>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              height: 90, borderRadius: 5, padding: 2, backgroundColor: lightBlue[200], color: 'white',
            }}
          >
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>지출</Typography>
              <Box sx={{ textAlign: 'end', fontWeight: 'bold' }}>1000000원</Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MonthlyStatement;
