import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './components/layouts/containerLayout/HomeLayout';
import homeRoutes from './routes/homeRoutes';
import managementRoutes from './routes/managementRoutes';
import ManagementLayout from './components/layouts/containerLayout/ManagementLayout';
import analysisRoutes from './routes/analysisRoutes';
import AnalysisLayout from './components/layouts/containerLayout/AnalysisLayout';
import { RouterDOM } from './types/common';

function App() {
  const routesMapper = (routes: RouterDOM[]) => routes.map((route: RouterDOM) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    />
  ));

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {routesMapper(homeRoutes)}
        <Route path="/management" element={<ManagementLayout />}>
          {routesMapper(managementRoutes)}
        </Route>
        <Route path="/analysis" element={<AnalysisLayout />}>
          {routesMapper(analysisRoutes)}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
