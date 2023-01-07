import {
  Box,
  Grid,
  List, ListItem, Typography,
} from '@mui/material';

function AnalysisList({ data }) {
  return (
    <Box mx={3}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Your Ranking
      </Typography>
      <List>
        {data.map((d, index) => (
          <ListItem>
            <Grid container spacing={2}>
              <Grid xs={2}>
                <Box>{(index + 1)}</Box>
              </Grid>
              <Grid xs={4}>
                <Box>{d.label}</Box>
              </Grid>
              <Grid xs={6}>
                <Box>{d.value.toLocaleString('ko-KR')}</Box>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AnalysisList;
