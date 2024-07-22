import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //console.log(action);
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.name === item.name
      );
      if (productItem) {
        productItem.quantity += 1;
      } else {
        state.cartItems = [item, ...state.cartItems];
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.name !== item.name
      );
    },
    emptyCart(state, action) {
      const item = action.payload;
      state.cartItems = [];
    },
    incrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.name === item.name
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.name === item.name
      );
      if (productItem) {
        productItem.quantity -= 1;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.name !== item.name
          );
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQ, decrementQ, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
