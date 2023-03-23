/* eslint-disable */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import HomeLayout from './components/layouts/containerLayout/HomeLayout';
import homeRoutes from './utils/routes/homeRoutes';
import managementRoutes from './utils/routes/managementRoutes';
import ManagementLayout from './components/layouts/containerLayout/ManagementLayout';
import analysisRoutes from './utils/routes/analysisRoutes';
import AnalysisLayout from './components/layouts/containerLayout/AnalysisLayout';
import { selectIsDarkMode } from './utils/redux/setting/settingSlice';
import { darkThemeOptions, lightThemeOptions } from './theme';

function App() {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? createTheme(darkThemeOptions) : createTheme(lightThemeOptions)}>
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
    </ThemeProvider>
  );
}

export default App;
