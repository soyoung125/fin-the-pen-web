import { RouterDOM } from "@app/types/common.ts";
import { PATH } from "@constants/path.ts";
import Report from "@pages/reports/Report";
import ReportMonthDetails from "pages/reports/ReportMonthDetails";
import ReportCategoryDetails from "@pages/reports/ReportCategoryDetails/ReportCategoryDetails.tsx";

const REPORT_ROUTES: RouterDOM[] = [
  {
    path: PATH.report,
    element: <Report />,
  },
  {
    path: PATH.reportMonthDetail,
    element: <ReportMonthDetails />,
  },
  {
    path: PATH.reportCategoryDetail,
    element: <ReportCategoryDetails />,
  },
];

export default REPORT_ROUTES;
