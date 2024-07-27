import React from "react";
import { CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

const CartLine = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between">
      <div>
        <div className="text-small font-bold">{product.name}</div>
        <div className="flex flex-row gap-4">
          <div className="text-Red font-bold">{product.quantity}x</div>
          <div className="text-Rose300 font-bold">@ ${product.price}</div>
          <div className="text-Rose500 font-bold">
            ${product.price * product.quantity}
          </div>
        </div>
      </div>
      <button
        aria-label="remove"
        onClick={() => {
          dispatch(removeFromCart(product));
        }}
      >
        <CircleX />
      </button>
    </div>
  );
};

export default CartLine;
