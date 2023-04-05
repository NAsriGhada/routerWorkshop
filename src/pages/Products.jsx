import React from "react";
import ProductsList from "../component/ProductsList";

const Products = ({ products }) => {
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
