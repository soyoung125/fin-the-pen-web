import {
  Box, Grid, Paper, Stack, Typography,
} from '@mui/material';

/**
 * 미사용 컴포넌트?
 * @param {} param0
 * @returns
 */

function StatementCard({ title, value, color }) {
  return (
    <Grid item xs={6}>
      <Paper
        elevation={3}
        sx={{
          height: 90, borderRadius: 5, padding: 2, backgroundColor: color, color: 'white',
        }}
      >
        <Stack>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
          <Box sx={{ textAlign: 'end', fontWeight: 'bold' }}>{`${value}원`}</Box>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default StatementCard;
