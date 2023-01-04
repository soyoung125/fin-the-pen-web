import AnalysisContainer from '../../containers/analysis/AnalysisContainer';
import HomeContainer from '../../containers/home/HomeContainer';
import MyPageContainer from '../../containers/mypage/MyPageContainer';
import SignInContainer from '../../containers/sign/SignInContainer';
import TestContainer from '../../containers/test/TestContainer';
import PATH from '../constants/path';

const homeRoutes = [
  {
    path: PATH.home,
    element: <HomeContainer />,
  },
  {
    path: PATH.analysis,
    element: <AnalysisContainer />,
  },
  {
    path: PATH.signIn,
    element: <SignInContainer />,
  },
  {
    path: PATH.mypage,
    element: <MyPageContainer />,
  },
  {
    path: PATH.test,
    element: <TestContainer />,
  },
];

export default homeRoutes;
