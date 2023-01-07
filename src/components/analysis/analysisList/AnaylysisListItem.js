import { Box, Grid, ListItem } from '@mui/material';

function AnalysisListItem({ category, rank }) {
  return (
    <ListItem>
      <Grid container spacing={2}>
        <Grid xs={2}>
          <Box>
            {rank}
            st
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box>{category.label}</Box>
        </Grid>
        <Grid xs={6}>
          <Box>{category.value.toLocaleString('ko-KR')}</Box>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default AnalysisListItem;
