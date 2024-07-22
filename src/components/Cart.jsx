import { CircleX, Trees } from "lucide-react";
const Cart = ({ confirm }) => {
  return (
    <div className="flex flex-col gap-2 p-8 bg-white rounded-xl mt-10">
      <h3 className="text-2xl font-bold text-Red">Your Cart (7)</h3>
      <div className="flex flex-col gap-4">
        {/** Item Line */}
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-small font-bold">Classic Tiramisu</div>
            <div className="flex flex-row gap-4">
              <div className="text-Red font-bold">4x</div>
              <div className="text-Rose300 font-bold">@ $5.50</div>
              <div className="text-Rose500 font-bold">5.50</div>
            </div>
          </div>
          <button>
            <CircleX />
          </button>
        </div>
        {/** END Item Line */}
        {/** Item Line */}
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-small font-bold">Classic Tiramisu</div>
            <div className="flex flex-row gap-4">
              <div className="text-Red font-bold">4x</div>
              <div className="text-Rose300 font-bold">@ $5.50</div>
              <div className="text-Rose500 font-bold">5.50</div>
            </div>
          </div>
          <button>
            <CircleX />
          </button>
        </div>
        {/** END Item Line */}
        {/** Item Line */}
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-small font-bold">Classic Tiramisu</div>
            <div className="flex flex-row gap-4">
              <div className="text-Red font-bold">4x</div>
              <div className="text-Rose300 font-bold">@ $5.50</div>
              <div className="text-Rose500 font-bold">5.50</div>
            </div>
          </div>
          <button>
            <CircleX />
          </button>
        </div>
        {/** END Item Line */}
      </div>
      <div className="mt-10 flex flex-row justify-between">
        <div>Order Total</div>
        <div className="font-bold text-xl">$50.50</div>
      </div>
      <div>
        <div className="w-10/12 mx-auto py-2 px-4 bg-Rose50 text-center flex flex-row gap-4">
          <Trees className="text-Green" /> This is a
          <span className="font-bold">carbon-neutral</span>
          delivery
        </div>
      </div>
      <button
        onClick={confirm}
        className="mt-8 bg-Red text-white py-2 px-4 w-full rounded-3xl active:bg-white active:text-Red"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
