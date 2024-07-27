import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import { renderWithProviders } from "../utils/utils-test";
import userEvent from "@testing-library/user-event";

describe("Cart", () => {
  it("renders the Cart component", async () => {
    const initialCart = {
      cartItems: [
        {
          image: {
            thumbnail: "./images/image-waffle-thumbnail.jpg",
            mobile: "./images/image-waffle-mobile.jpg",
            tablet: "./images/image-waffle-tablet.jpg",
            desktop: "./images/image-waffle-desktop.jpg",
          },
          name: "Waffle with Berries",
          category: "Waffle",
          price: 6.5,
          quantity: 1,
        },
      ],
    };
    const { store } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: initialCart,
      },
    });
    const h3 = screen.getByRole("heading");
    expect(h3).toHaveTextContent("1"); //header should say 1 product

    const removeButton = screen.getByRole("button", {
      name: /remove/i,
    });
    expect(removeButton).toBeInTheDocument();

    await userEvent.click(removeButton);
    //screen.debug();
    expect(removeButton).not.toBeInTheDocument();

    expect(h3).toHaveTextContent("0"); //header should say 0 products

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
