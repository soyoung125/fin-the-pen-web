import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './components/layouts/containerLayout/HomeLayout';
import homeRoutes from './utils/routes/homeRoutes';
import managementRoutes from './utils/routes/managementRoutes';
import ManagementLayout from './components/layouts/containerLayout/ManagementLayout';
import analysisRoutes from './utils/routes/analysisRoutes';
import AnalysisLayout from './components/layouts/containerLayout/AnalysisLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {
          homeRoutes
            .map((route) => <Route path={route.path} element={route.element} key={route.path} />)
        }
        <Route path="/management" element={<ManagementLayout />}>
          {
            managementRoutes
              .map((route) => <Route path={route.path} element={route.element} key={route.path} />)
          }
        </Route>
        <Route path="/analysis" element={<AnalysisLayout />}>
          {
            analysisRoutes
              .map((route) => <Route path={route.path} element={route.element} key={route.path} />)
          }
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
