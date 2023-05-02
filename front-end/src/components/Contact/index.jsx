import React from "react";

//? Icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

//? Styles
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" name="email" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
