import React from "react";

//? Styles
import "./index.scss";

const img = ["/img/person_1.jpg"];

const Team = () => {
  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="content">
        <div
          className="card"
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <img src={img[0]} alt="Plasencia Liza" />
          <div className="details">
            <h1>Plasencia Liza</h1>
            <span className="position">CEO</span>
            <span className="desc">
              The founder of Costa Liz Merchandising Store, proposed to the
              owners of Costa Liza Resort on 2010.
            </span>
          </div>
        </div>
        <div
          className="card"
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <img src={img[0]} alt="Carabio Ma. Judy" />
          <div className="details">
            <h1>Carabio Ma. Judy</h1>
            <span className="position">
              Operations, Office, Purchasing Manager
            </span>
            <span className="desc">
              Head of inventory and stock control, also responsible for designs
              along with the Marketing Manager.
            </span>
          </div>
        </div>
        <div
          className="card"
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <img src={img[0]} alt="Plasencia Riza Mae" />
          <div className="details">
            <h1>Plasencia Riza Mae</h1>
            <span className="position">Marketing Manager</span>
            <span className="desc">
              Promotes the products on the market along with the Marketing
              Manager of Costa Liz resort.
            </span>
          </div>
        </div>
        <div
          className="card"
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <img src={img[0]} alt="Carabio Corrie Joy" />
          <div className="details">
            <h1>Carabio Corrie Joy</h1>
            <span className="position">Quality Control Manager</span>
            <span className="desc">
              The person incharge of making sure the materials supplid and
              products are top-notch and high quality.
            </span>
          </div>
        </div>
        <div
          className="card"
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <img src={img[0]} alt="Go Danielle Venseth" />
          <div className="details">
            <h1>Go Danielle Venseth</h1>
            <span className="position">Accountant, Bookkeeper, Controller</span>
            <span className="desc">
              Incharge of the finances and monetary for stocks, inventories and
              employee salaries and bonuses.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
