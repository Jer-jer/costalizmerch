import React from "react";
import { Link } from "react-router-dom";

//? Styles
import "./index.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt="Item"
            className="mainImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          {item?.attributes.old_price === 0 ? null : (
            <h3 className="discount">Php. {item?.attributes.old_price}.00</h3>
          )}
          <h3>Php. {item?.attributes.price}.00</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
