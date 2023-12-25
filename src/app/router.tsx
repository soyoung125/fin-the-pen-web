import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/containerLayout/HomeLayout";
import ManagementLayout from "../components/layouts/containerLayout/ManagementLayout";
import ReportLayout from "@components/layouts/containerLayout/ReportLayout.tsx";
import HOME_ROUTES from "./routes/HOME_ROUTES";
import MANAGEMENT_ROUTES from "./routes/MANAGEMENT_ROUTES";
import ANALYSIS_ROUTES from "./routes/ANALYSIS_ROUTES";
import REPORT_ROUTES from "@routes/REPORT_ROUTES.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          children: HOME_ROUTES,
        },
        {
          path: "/management",
          element: <ManagementLayout />,
          children: MANAGEMENT_ROUTES,
        },
        {
          // deprecated
          path: "/analysis",
          element: <ReportLayout />,
          children: ANALYSIS_ROUTES,
        },
        {
          path: "/report",
          element: <ReportLayout />,
          children: REPORT_ROUTES,
        },
      ],
    },
  ],
  {
    basename: "/fin-the-pen-web",
  }
);

export default router;
