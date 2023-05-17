import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

//? Icons
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//? Styles
import "./index.scss";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;

    products.forEach((product) => (total += product.quantity * product.price));

    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51N8dceKkhwF5aPknJzpdpaujeF8zf0epSUpUINi6gXnTGRQIsWOgR14yVgnJ6bVvs34s1ARAmNJMWvKXNn8CYLMl00MuMXU9EE"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        data: {
          products: products
        },
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1 className="item-title">{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x Php. {item.price}.00
            </div>
          </div>
          <DeleteRoundedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Php. {totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
