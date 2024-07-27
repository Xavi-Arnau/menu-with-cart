import { render, screen } from "@testing-library/react";

import { renderWithProviders } from "../utils/utils-test";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Integration", () => {
  it("add a product and check the modal", async () => {
    const initialCart = {
      cartItems: [],
    };
    const { store } = renderWithProviders(<App />, {
      preloadedState: {
        cart: initialCart,
      },
    });

    const addButton = screen.getAllByText(/Add to cart/)[0];
    await userEvent.click(addButton);

    const removeButton = screen.getByRole("button", {
      name: /remove/i,
    });
    expect(removeButton).toBeInTheDocument();

    const confirmButton = screen.getByText(/Confirm Order/);
    expect(confirmButton).toBeInTheDocument();

    await userEvent.click(confirmButton);

    const newOrderButton = screen.getByText(/Start New Order/);
    expect(newOrderButton).toBeInTheDocument();

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
