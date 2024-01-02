import AnalysisContainer from "../../legacies/analysis/AnalysisContainer";
import AnalysisDetailContainer from "../../legacies/analysis/AnalysisDetailContainer";
import { RouterDOM } from "@app/types/common.ts";
import { PATH } from "../../constants/path.ts";

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
