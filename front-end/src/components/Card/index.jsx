import React from "react";
import { Link } from "react-router-dom";

//? Styles
import "./index.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="Item" className="mainImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          {item.oldPrice === 0 ? null : (
            <h3 className="discount">Php. {item.oldPrice}.00</h3>
          )}
          <h3>Php. {item.price}.00</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
