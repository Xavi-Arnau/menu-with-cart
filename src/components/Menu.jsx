import { useEffect, useState } from "react";
import data from "../data.json";
import Item from "./Item";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div>
      <h1 className="p-4 text-4xl font-bold">Desserts</h1>
      <div className="flex flex-row flex-wrap ">
        {products.map((product, index) => (
          <Item key={product.name} product={product} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
