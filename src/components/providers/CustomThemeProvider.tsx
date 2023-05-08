import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../app/redux/slices/settingSlice';
import { darkThemeOptions, lightThemeOptions } from '../../app/theme';

/**
 * 다크모드 외에도 여러 가지 추가 설정이 올 수 있을것으로 기대하는 Wrapper Component
 */

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);
  return (
    <ThemeProvider
      theme={createTheme(isDarkMode ? darkThemeOptions : lightThemeOptions)}
    >
      {children}
    </ThemeProvider>
  );
}
export default CustomThemeProvider;
