import React from "react";
import { Link } from "react-router-dom";

//? Styles
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link className="link" to="/products/1">
            <span>Shirts</span>
          </Link>
          <Link className="link" to="/products/4">
            <span>Sweatshirts</span>
          </Link>
          <Link className="link" to="/products/5">
            <span>Accessories</span>
          </Link>
          <Link className="link" to="/products/6">
            <span>Cutleries</span>
          </Link>
          <Link className="link" to="/products/3">
            <span>New Products</span>
          </Link>
          <Link className="link" to="/products/2">
            <span>Sale</span>
          </Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Proposed by Liza Plasencia to the Costa Liz Resort Management for
            tourists locally and internationally to buy merchandise for their
            remembrance of their trip in Bantayan Island.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            For inquiries, you may go to plasencializa@costaliz.com or call our
            Purchasing Manager on 09458851157
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Costa Liz Resort</span>
          <span className="copyright">
            © Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/stripe-transparent.png" alt="Payment Methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
