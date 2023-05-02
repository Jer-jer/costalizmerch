import React from "react";

//? Styles
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Shirts</span>
          <span>Sweatshirts</span>
          <span>Mugs</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
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
