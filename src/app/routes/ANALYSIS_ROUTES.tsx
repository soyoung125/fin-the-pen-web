import AnalysisContainer from "../../containers/analysis/AnalysisContainer";
import AnalysisDetailContainer from "../../containers/analysis/AnalysisDetailContainer";
import { RouterDOM } from "@type/common.tsx";
import PATH from "../../constants/path.tsx";

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
