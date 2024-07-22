import React from "react";

const ModalLine = ({ product }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-1/5">
        <img className="w-16 rounded-xl" src={product.image.thumbnail} alt="" />
      </div>
      <div className="flex flex-col w-3/5">
        <div className="text-small font-bold">{product.name}</div>
        <div className="flex flex-row gap-4">
          <div className="text-Red font-bold">{product.quantity}x</div>
          <div className="text-Rose500">@ ${product.price}</div>
        </div>
      </div>
      <div className="w-1/5 font-bold text-right">
        ${product.price * product.quantity}
      </div>
    </div>
  );
};

export default ModalLine;
