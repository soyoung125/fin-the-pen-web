import AnalysisContainer from '../../containers/analysis/AnalysisContainer';
import HomeContainer from '../../containers/home/HomeContainer';
import SignInContainer from '../../containers/sign/SignInContainer';
import TestContainer from '../../containers/test/TestContainer';

const homeRoutes = [
  {
    path: '/',
    element: <HomeContainer />,
  },
  {
    path: '/analysis',
    element: <AnalysisContainer />,
  },
  {
    path: '/sign-in',
    element: <SignInContainer />,
  },
  {
    path: '/test',
    element: <TestContainer />,
  },
];

export default homeRoutes;
