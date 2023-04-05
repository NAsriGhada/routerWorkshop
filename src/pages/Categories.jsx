import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <ul>
        <li><Link to={'/products'}>Electronics</Link></li>
        <li>Clothing</li>
        <li>Kitchen</li>
      </ul>
    </div>
  );
};

export default Categories;
