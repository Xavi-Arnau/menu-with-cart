import { Trees } from "lucide-react";
import { useSelector } from "react-redux";
import CartLine from "./CartLine";
const Cart = ({ confirm }) => {
  const { cartItems } = useSelector((state) => state.cart);
  //console.log(cartItems);
  return (
    <div className="flex flex-col gap-2 p-8 bg-white rounded-xl mt-10">
      <h3 className="text-2xl font-bold text-Red">
        Your Cart ({cartItems.length || 0})
      </h3>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartLine key={item.name} product={item} />
        ))}
      </div>
      <div className="mt-10 flex flex-row justify-between">
        <div>Order Total</div>
        <div className="font-bold text-xl">
          $
          {cartItems.reduce(
            (total, current) => total + current.price * current.quantity,
            0
          )}
        </div>
      </div>
      <div>
        <div className="md:w-10/12 md:mx-auto py-2 px-4 bg-Rose50 text-center flex flex-row gap-4">
          <Trees size={22} className="text-Green" /> This is a
          <span className="font-bold">carbon-neutral</span>
          delivery
        </div>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <button
          onClick={confirm}
          className="mt-8 bg-Red text-white py-2 px-4 w-full rounded-3xl active:bg-white active:text-Red"
        >
          Confirm Order
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
