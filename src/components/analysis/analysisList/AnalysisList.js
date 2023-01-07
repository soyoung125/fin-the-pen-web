import {
  Box,
  List, Typography,
} from '@mui/material';
import AnalysisListItem from './AnaylysisListItem';

function AnalysisList({ data }) {
  return (
    <Box mx={3}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Your Ranking
      </Typography>
      <List>
        {data.map((d, index) => (
          <AnalysisListItem category={d} rank={(index + 1)} />
        ))}
      </List>
    </Box>
  );
}

export default AnalysisList;
