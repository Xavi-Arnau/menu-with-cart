import { ShoppingCart } from "lucide-react";

const Item = ({ product }) => {
  console.log(product);
  return (
    <div className="w-1/3 p-4 flex flex-col gap-2">
      <div className="relative flex flex-col items-center">
        <img
          src={product.image.desktop}
          alt=""
          className="object-cover rounded-xl"
        />
        <button
          className="-mt-4 bg-white text-Red border-2 border-Red py-1 px-4 rounded-2xl 
        hover:text-white hover:bg-Red flex flex-row gap-2"
        >
          <ShoppingCart size={20} />
          Add to cart
        </button>
      </div>

      <h3 className="mt-6 text-sm text-slate-700">{product.category}</h3>
      <h2 className="font-bold text-sm">{product.name}</h2>
      <p className="text-Red text-base font-bold">${product.price}</p>
    </div>
  );
};

export default Item;
