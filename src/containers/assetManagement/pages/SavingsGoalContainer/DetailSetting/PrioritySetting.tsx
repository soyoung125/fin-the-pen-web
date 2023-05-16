import { Box, Button, Grid } from '@mui/material';
import RoundedPaper from '../../../../../components/common/RoundedPaper';

function PrioritySetting() {
  return (
    <RoundedPaper my={1}>
      <Box>저축 우선순위</Box>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={6}><Button fullWidth variant="contained">한해 저축 목표</Button></Grid>
        <Grid item xs={6}><Button fullWidth variant="outlined">Personal Goal</Button></Grid>
      </Grid>
    </RoundedPaper>
  );
}

export default PrioritySetting;
