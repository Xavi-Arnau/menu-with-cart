import { Trees } from "lucide-react";
import { useSelector } from "react-redux";
import CartLine from "./CartLine";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Cart = ({ confirm }) => {
  const { cartItems } = useSelector((state) => state.cart);
  //console.log(cartItems);
  return (
    <div className="flex flex-col gap-2 md:p-8 bg-white rounded-xl mt-10">
      <h3 className="text-2xl font-bold text-Red">
        Your Cart ({cartItems.length || 0})
      </h3>

      <TransitionGroup className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CSSTransition key={item.name} timeout={500} classNames="item-side">
            <CartLine key={item.name} product={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>

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
          <Trees size={22} className="text-Green" />
          <div>
            This is a <span className="font-bold">carbon-neutral</span> delivery
          </div>
        </div>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <button
          onClick={confirm}
          className="mt-8 mb-8 bg-Red text-white py-2 px-4 w-full rounded-3xl active:bg-white active:text-Red 
          animate-in zoom-in duration-500"
        >
          Confirm Order
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
