import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

// const Home = ({products}) => {
//   return (
//     <div>
//       <p>Welcome to our small e-commerce shop</p>
//       <ProductsList products={products}/>
//     </div>
//   )
// }

// export default Home

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };
  return (
    <div className="home">
      <p>Welcome to our small e-commerce shop</p>
      <button className="btn btn-success" onClick={() => handleNavigate()}>
        Check Our Products
      </button>
    </div>
  );
};

export default Home;
