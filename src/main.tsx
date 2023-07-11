import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./app/redux/store";
import CustomThemeProvider from "./components/providers/CustomThemeProvider";
import router from "./app/router";
import { worker } from "./mocks/browser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function main() {
  // msw 세팅 시작
  await worker.start({
    serviceWorker: {
      url: "/fin-the-pen-web/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
  // msw 세팅 끝

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  const persistor = persistStore(store);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CustomThemeProvider>
              <RouterProvider router={router} />
            </CustomThemeProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

main();
