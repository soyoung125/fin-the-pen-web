import type { Preview } from "@storybook/react";
import CustomThemeProvider from "../src/components/providers/CustomThemeProvider";
import { store } from "../src/app/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { MemoryRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const persistor = persistStore(store);
      return (
        <MemoryRouter initialEntries={["/"]}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <CustomThemeProvider>
                <Story />
              </CustomThemeProvider>
            </PersistGate>
          </Provider>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
