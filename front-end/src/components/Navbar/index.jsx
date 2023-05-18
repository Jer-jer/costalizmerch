import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//? Icons
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

//? Components
import Cart from "../Cart";

//? Styles
import "./index.scss";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="/img/ph.svg"
              width={24}
              height={23}
              alt="Philippines"
            ></img>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Shirts
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Sweatshirts
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/5">
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            COSTA LIZ MERCH
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="icons">
            {/* <SearchRoundedIcon />
            <PersonRoundedIcon /> */}
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <LocalMallRoundedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
