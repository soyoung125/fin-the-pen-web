import HomeContainer from '../../containers/home/HomeContainer';
import TestContainer from '../../containers/test/TestContainer';

const homeRoutes = [
  {
    path: '/',
    element: <HomeContainer />,
  },
  {
    path: '/test',
    element: <TestContainer />,
  },
];

export default homeRoutes;
