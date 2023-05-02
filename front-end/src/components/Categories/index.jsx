import React from "react";
import { Link } from "react-router-dom";

//? Styles
import "./index.scss";

const categoryImg = [
  "/img/sale.jpg",
  "/img/shirt.jpg",
  "/img/new.jpg",
  "/img/sweatshirt.jpg",
  "/img/accessories.jpg",
  "/img/cutlery.jpg",
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={categoryImg[0]} alt="Sale" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src={categoryImg[1]} alt="Shirts" />
          <button>
            <Link className="link" to="/products/1">
              Shirts
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={categoryImg[2]} alt="New Products" />
          <button>
            <Link className="link" to="/products/1">
              New Products
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={categoryImg[3]} alt="Sweatshirts" />
              <button>
                <Link className="link" to="/products/1">
                  Sweatshirts
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={categoryImg[4]} alt="Accessories" />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={categoryImg[5]} alt="Cutleries" />
          <button>
            <Link className="link" to="/products/1">
              Cutleries
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
