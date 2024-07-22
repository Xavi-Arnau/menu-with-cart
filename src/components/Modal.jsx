import { CircleCheckBig } from "lucide-react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backgrop-blur-sm flex justify-center items-center z-30">
      <div className="bg-white p-8 flex flex-col gap-4 min-w-[500px]">
        <CircleCheckBig className="text-Green" />
        <h2 className="text-3xl font-bold">Order Confirmed</h2>
        <h3 className="text-sm text-Rose500">We hope you enjoy your food!</h3>
        <div className="bg-Rose50 p-4 flex flex-col gap-4">
          {/** Start */}
          <div className="flex flex-row items-center">
            <div className="w-1/5">
              <img
                className="w-16 rounded-xl"
                src="/images/image-brownie-thumbnail.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col w-3/5">
              <div className="text-small font-bold">Classic Tiramisu</div>
              <div className="flex flex-row gap-4">
                <div className="text-Red font-bold">1x</div>
                <div className="text-Rose500">@ $5.50</div>
              </div>
            </div>
            <div className="w-1/5 font-bold text-right">$5.50</div>
          </div>
          {/** End */}
        </div>
        <div className="mt-10 flex flex-row justify-between">
          <div>Order Total</div>
          <div className="font-bold text-xl">$50.50</div>
        </div>
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-Red text-white rounded-3xl"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Modal;
