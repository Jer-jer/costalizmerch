import React, { useState } from "react";

//? Icons
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";

//? Styles
import "./index.scss";

const img = [
  "/img/Shirt Whiite 450.png",
  "/img/Shirt Black 450.png",
  "/img/Sweatshirt Black 550.png",
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={img[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={img[1]} alt="" onClick={(e) => setSelectedImage(1)} />
          <img src={img[2]} alt="" onClick={(e) => setSelectedImage(2)} />
        </div>
        <div className="main-img">
          <img src={img[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">Php. 550.00</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam ad
          earum laudantium, fuga sit miinima aut voluptatem obcaecati omnis
          laborum vitae expedita in, est eius perspiciatis maiores. Id, sed
          voluptas?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <ShoppingCartRoundedIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <BalanceRoundedIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Sweatshirt</span>
          <span>Tag: Sweatshhirt, Black</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
