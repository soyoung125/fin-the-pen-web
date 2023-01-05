import { Box } from '@mui/material';
import AnalysisGraph from '../../components/analysis/AnalysisGraph';
import AnalysisHeader from '../../components/analysis/AnalysisHeader';
import AnalysisList from '../../components/analysis/AnalysisList';

function AnalysisContainer() {
  return (
    <Box>
      <AnalysisHeader />
      <AnalysisGraph />
      <AnalysisList />
    </Box>
  );
}
export default AnalysisContainer;
/**
 * 분석 페이지
 */
