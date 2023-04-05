import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  return (
    <div className="margin">
      <div className="card" style={{ width: "18rem" }}>
        <img src={el.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{el.name}</p>
          <Link className="btn btn-warning" to={`/product/${el.id}`}>Click here</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
