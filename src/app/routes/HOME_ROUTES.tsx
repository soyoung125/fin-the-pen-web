import AssetManagement from '../../pages/AssetManagement';
import MyPage from '../../pages/MyPage';
import Notification from '../../pages/Notification';
import SettingsContainer from '../../containers/settings/SettingsContainer';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import TestContainer from '../../containers/test/TestContainer';
import PATH from '../../domain/constants/path';
import Home from '../../pages/Home';
import { RouterDOM } from '../../types/common';
import DetailSetting from '../../containers/assetManagement/pages/SavingsGoalContainer/DetailSetting';

const HOME_ROUTES: RouterDOM[] = [
  {
    path: PATH.home,
    element: <Home />,
  },
  {
    path: PATH.signIn,
    element: <SignIn />,
  },
  {
    path: PATH.signUp,
    element: <SignUp />,
  },
  {
    path: PATH.myPage,
    element: <MyPage />,
  },
  {
    path: PATH.notification,
    element: <Notification />,
  },
  {
    path: PATH.assetManagement,
    element: <AssetManagement />,
  },
  {
    path: PATH.savingDetailSetting,
    element: <DetailSetting />,
  },
  {
    path: PATH.settings,
    element: <SettingsContainer />,
  },
  {
    path: PATH.test,
    element: <TestContainer />,
  },
];

export default HOME_ROUTES;
