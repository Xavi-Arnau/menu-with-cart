import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu";
import store from "../store";
import { Provider } from "react-redux";

describe("Menu", () => {
  it("renders the Menu component", () => {
    render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
