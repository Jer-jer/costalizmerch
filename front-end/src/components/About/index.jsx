import React from "react";

//?
import "./index.scss";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>About Us</h1>
      </div>
      {/* Add Line Animation */}
      <hr />
      <div className="content">
        <span>
          Proposed by Liza Plasencia to the Costa Liz Resort Management for
          tourists locally and internationally to buy merchandise for their
          remembrance of their trip in Bantayan Island. Hailed as one of the top
          ten best merchandising stores in all of Bantayan Island, the store
          aims to deliver the best quality products made from eco-friendly and
          long lasting local materials.
        </span>
      </div>
    </div>
  );
};

export default About;
