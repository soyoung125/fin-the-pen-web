import { RouterDOM } from "@type/common.tsx";
import { PATH } from "@constants/path.ts";
import Report from "@pages/reports/Report";
import ReportDetails from "@pages/reports/ReportDetails";

const REPORT_ROUTES: RouterDOM[] = [
  {
    path: PATH.report,
    element: <Report />,
  },
  {
    path: PATH.reportDetail,
    element: <ReportDetails />,
  },
];

export default REPORT_ROUTES;
