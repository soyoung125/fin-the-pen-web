import AssetManagementContainer from '../../containers/assetManagement/AssetManagementContainer';
import HomeContainer from '../../containers/home/HomeContainer';
import MyPageContainer from '../../containers/mypage/MyPageContainer';
import NotificationContainer from '../../containers/notification/NotificationContainer';
import SettingsContainer from '../../containers/settings/SettingsContainer';
import SignInContainer from '../../containers/sign/SignInContainer';
import SignUpContainer from '../../containers/sign/SignUpContainer';
import TestContainer from '../../containers/test/TestContainer';
import PATH from '../../domain/constants/path';
import { Route } from '../../types/common';

const homeRoutes: Route[] = [
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
    path: PATH.mypage,
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
];

export default homeRoutes;
