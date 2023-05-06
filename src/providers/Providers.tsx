import { ReactNode } from 'react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '../store';
import CustomThemeProvider from '../components/providers/CustomThemeProvider';

interface ProvidersProps {
  children: ReactNode;
}
function Providers({ children }: ProvidersProps) {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default Providers;
