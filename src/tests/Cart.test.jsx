import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import { renderWithProviders } from "../utils/utils-test";

describe("Cart", () => {
  it("renders the Cart component", () => {
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
    screen.debug();
    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
