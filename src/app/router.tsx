import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../components/layouts/containerLayout/HomeLayout';
import ManagementLayout from '../components/layouts/containerLayout/ManagementLayout';
import AnalysisLayout from '../components/layouts/containerLayout/AnalysisLayout';
import HOME_ROUTES from '../routes/HOME_ROUTES';
import MANAGEMENT_ROUTES from '../routes/MANAGEMENT_ROUTES';
import ANALYSIS_ROUTES from '../routes/ANALYSIS_ROUTES';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        children: HOME_ROUTES
      },
      {
        path: '/management',
        element: <ManagementLayout />,
        children: MANAGEMENT_ROUTES
      },
      {
        path: '/analysis',
        element: <AnalysisLayout />,
        children: ANALYSIS_ROUTES
      }
    ],
  },
], {
  basename: '/fin-the-pen-web'
});

export default router;
