import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  // var t0 = performance.now();
  const { products, addItem } = useContext(ProductContext);
  // var t1 = performance.now();
  // console.log("destructuring took " + (t1 - t0) + " milliseconds.");

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
