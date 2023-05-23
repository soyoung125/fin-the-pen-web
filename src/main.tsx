import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './app/redux/store';
import CustomThemeProvider from './components/providers/CustomThemeProvider';
import router from './app/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomThemeProvider>
          <RouterProvider router={router} />
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
