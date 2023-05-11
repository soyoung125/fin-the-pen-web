/**
 * 스토리북 테스트용 Providers
 * (제작중)
 */

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/redux/store';
import CustomThemeProvider from '../components/providers/CustomThemeProvider';

interface ProvidersProps {
  children: React.ReactNode
}
function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}
export default Providers;
