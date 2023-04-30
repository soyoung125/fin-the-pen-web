import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/layouts/containerLayout/HomeLayout';
import PATH from './domain/constants/path';
import AssetManagementContainer from './containers/assetManagement/AssetManagementContainer';
import NotificationContainer from './containers/notification/NotificationContainer';
import MyPageContainer from './containers/my-page/MyPageContainer';
import SignUpContainer from './containers/sign/SignUpContainer';
import SignInContainer from './containers/sign/SignInContainer';
import HomeContainer from './containers/home/HomeContainer';
import SettingsContainer from './containers/settings/SettingsContainer';
import TestContainer from './containers/test/TestContainer';
import ManagementLayout from './components/layouts/containerLayout/ManagementLayout';
import SavingsGoal from './containers/assetManagement/pages/SavingsGoalContainer';
import RegularDepositWithdrawal from './containers/assetManagement/pages/RegularDepositWithDrawalContainer';
import DetailSetting from './containers/assetManagement/pages/RegularDepositWithDrawalContainer/detailPage/DetailSetting';
import DetailInformation from './containers/assetManagement/pages/RegularDepositWithDrawalContainer/detailPage/DetailInformation';
import AssetsByCategory from './containers/assetManagement/pages/AssetsByCategory';
import ScheduleManagement from './containers/assetManagement/pages/ScheduleManagement';
import AnalysisLayout from './components/layouts/containerLayout/AnalysisLayout';
import AnalysisContainer from './containers/analysis/AnalysisContainer';
import AnalysisDetailContainer from './containers/analysis/AnalysisDetailContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        children: [
          {
            path: PATH.home,
            element: <HomeContainer />,
          },
          {
            path: PATH.signIn,
            element: <SignInContainer />,
          },
          {
            path: PATH.signUp,
            element: <SignUpContainer />,
          },
          {
            path: PATH.myPage,
            element: <MyPageContainer />,
          },
          {
            path: PATH.notification,
            element: <NotificationContainer />,
          },
          {
            path: PATH.assetManagement,
            element: <AssetManagementContainer />,
          },
          {
            path: PATH.settings,
            element: <SettingsContainer />,
          },
          {
            path: PATH.test,
            element: <TestContainer />,
          },
        ]
      },
      {
        path: '/management',
        element: <ManagementLayout />,
        children: [
          {
            path: PATH.savingsGoal,
            element: <SavingsGoal />,
          },
          {
            path: PATH.regularDepositWithdrawal,
            element: <RegularDepositWithdrawal />,
          },
          {
            path: PATH.DetailSetting,
            element: <DetailSetting />,
          },
          {
            path: PATH.DetailInformation,
            element: <DetailInformation />,
          },
          {
            path: PATH.assetsByCategory,
            element: <AssetsByCategory />,
          },
          {
            path: PATH.scheduleManagement,
            element: <ScheduleManagement />,
          },
        ]
      },
      {
        path: '/analysis',
        element: <AnalysisLayout />,
        children: [
          {
            path: PATH.analysis,
            element: <AnalysisContainer />,
          },
          {
            path: PATH.analysisDetail,
            element: <AnalysisDetailContainer />,
          },
        ]
      }
    ],
  },
], {
  basename: '/fin-the-pen-web'
});

export default router;
