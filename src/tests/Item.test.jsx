import { render, screen } from "@testing-library/react";
import Item from "../components/Item";
import store from "../store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";

const product = {
  image: {
    thumbnail: "./images/image-waffle-thumbnail.jpg",
    mobile: "./images/image-waffle-mobile.jpg",
    tablet: "./images/image-waffle-tablet.jpg",
    desktop: "./images/image-waffle-desktop.jpg",
  },
  name: "Waffle with Berries",
  category: "Waffle",
  price: 6.5,
};

describe("Item", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Item product={product} />
      </Provider>
    );
  });

  it("renders the Item component", () => {});

  it("clicks the add to cart button and increments it", async () => {
    const button = screen.getByText(/Add to cart/);

    await userEvent.click(button);
    expect(button).not.toBeInTheDocument();

    const minusButton = screen.getByRole("button", {
      name: /minus/i,
    });
    const plusButton = screen.getByRole("button", {
      name: /plus/i,
    });

    expect(minusButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();

    const quantity = screen.getByRole("generic", {
      name: /quantity/i,
    });
    expect(quantity).toHaveTextContent("1"); //after adding to cart initial is 1

    await userEvent.click(plusButton);
    expect(quantity).toHaveTextContent("2"); //after incrementing we go to 2

    await userEvent.click(minusButton);
    expect(quantity).toHaveTextContent("1"); //after decrementing we go from 2 to 1

    await userEvent.click(minusButton);
    expect(minusButton).not.toBeInTheDocument(); //after decrementing the button dissapers and we go back to add to cart button

    const button2 = screen.getByText(/Add to cart/);
    expect(button2).toBeInTheDocument();

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
