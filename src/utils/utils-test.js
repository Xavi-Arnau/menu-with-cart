// utils/utils-test.js
import { render } from "@testing-library/react";
import setupStore from "../store";
import { Provider } from "react-redux";
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: wrapper, ...renderOptions }) };
}
