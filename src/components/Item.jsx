import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQ, decrementQ } from "../slices/cartSlice";

const Item = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const isAlreadyAdded = (item) => {
    return cartItems.find((product) => product.name === item.name);
  };

  const getQty = (item) => {
    return cartItems.find((product) => product.name === item.name).quantity;
  };

  return (
    <div className="md:w-1/3 md:p-4 flex flex-col gap-2">
      <div className="relative flex flex-col items-center">
        <img
          src={product.image.desktop}
          alt=""
          className="object-cover rounded-xl"
        />
        {isAlreadyAdded(product) ? (
          <div
            className="-mt-4 bg-Red text-white flex flex-row py-1 px-4 gap-6 rounded-2xl border-2 
          border-Red animate-in zoom-in duration-500"
          >
            <button
              aria-label="minus"
              onClick={() => dispatch(decrementQ(product))}
            >
              <Minus size={20} />
            </button>
            <div aria-label="quantity" className="w-4 text-center">
              {getQty(product)}
            </div>
            <button
              aria-label="plus"
              onClick={() => dispatch(incrementQ(product))}
            >
              <Plus size={20} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              let item = null;
              item = { ...product, quantity: 1 };
              dispatch(addToCart(item));
            }}
            className="-mt-4 bg-white text-Red border-2 border-Red py-1 px-4 rounded-2xl 
        hover:text-white hover:bg-Red flex flex-row gap-2"
          >
            <ShoppingCart size={20} />
            Add to cart
          </button>
        )}
      </div>

      <h3 className="mt-6 text-sm text-slate-700">{product.category}</h3>
      <h2 className="font-bold text-sm">{product.name}</h2>
      <p className="text-Red text-base font-bold">${product.price}</p>
    </div>
  );
};

export default Item;
