import AnalysisContainer from '../../containers/analysis/AnalysisContainer';
import AnalysisDetailContainer from '../../containers/analysis/AnalysisDetailContainer';
import PATH from '../../domain/constants/path';
import { RouterDOM } from '../../types/common';

const ANALYSIS_ROUTES: RouterDOM[] = [
  {
    path: PATH.analysis,
    element: <AnalysisContainer />,
  },
  {
    path: PATH.analysisDetail,
    element: <AnalysisDetailContainer />,
  },
];

export default ANALYSIS_ROUTES;
