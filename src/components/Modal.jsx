import { CircleCheckBig } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import ModalLine from "./ModalLine";
import { emptyCart } from "../slices/cartSlice";

const Modal = ({ onClose }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backgrop-blur-sm flex justify-center items-center z-30">
      <div className="bg-white p-8 flex flex-col gap-4 min-w-[500px]">
        <CircleCheckBig className="text-Green" />
        <h2 className="text-3xl font-bold">Order Confirmed</h2>
        <h3 className="text-sm text-Rose500">We hope you enjoy your food!</h3>
        <div className="bg-Rose50 p-4 flex flex-col gap-4">
          {/** Start */}
          {cartItems.map((item) => (
            <ModalLine key={item.name} product={item} />
          ))}
          {/** End */}
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
        <button
          onClick={() => {
            dispatch(emptyCart());
            onClose();
          }}
          className="w-full py-2 px-4 bg-Red text-white rounded-3xl"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Modal;
