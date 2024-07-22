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
        {products.map((product) => (
          <Item key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
