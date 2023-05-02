import React from "react";

//? Icons
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//? Styles
import "./index.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "/img/Shirt Black 450.png",
      title: "Black Shirt",
      desc: "Black Shirt",
      isNew: false,
      oldPrice: 0,
      price: 450,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1 className="item-title">{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x Php. {item.price}.00</div>
          </div>
          <DeleteRoundedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Php. 450.00</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
