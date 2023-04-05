import React from "react";
import { useParams } from "react-router-dom";

const DetailedProduct = ({ products }) => {
  const { id } = useParams();
  const foundUser = products.find((user) => user.id === Number(id));
  return (
    <div>
      <img src={foundUser.img} style={{ width: "100px" }} alt="..." />
      <p className="card-text">Id number: {id}</p>
      <p className="card-text">Product Name: {foundUser.name}</p>
      <button className="btn btn-outline-info">Buy</button>
    </div>
  );
};

export default DetailedProduct;
