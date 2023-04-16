import AnalysisContainer from '../../containers/analysis/AnalysisContainer';
import AnalysisDetailContainer from '../../containers/analysis/AnalysisDetailContainer';
import PATH from '../../domain/constants/path';
import { Route } from '../../types/common';

const analysisRoutes: Route[] = [
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
