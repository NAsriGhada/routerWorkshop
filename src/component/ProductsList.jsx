import React from "react";
import Card from "./card/Card";

const ProductsList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((el, key) => {
          return <Card el={el} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
