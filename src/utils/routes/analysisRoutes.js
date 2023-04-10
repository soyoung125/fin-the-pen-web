import AnalysisContainer from '../../containers/analysis/AnalysisContainer';
import AnalysisDetailContainer from '../../containers/analysis/AnalysisDetailContainer';
import PATH from '../../domain/constants/path';

const analysisRoutes = [
  {
    path: PATH.analysis,
    element: <AnalysisContainer />,
  },
  {
    path: PATH.analysisDetail,
    element: <AnalysisDetailContainer />,
  },
];

export default analysisRoutes;
