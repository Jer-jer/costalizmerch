import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <div
          className="row"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
        >
          <LazyLoadImage
            className="img"
            src={categoryImg[0]}
            effect="blur"
            placeholderSrc={categoryImg[0]}
            alt="Sale"
          />
          <button>
            <Link className="link" to="/products/2">
              Sale
            </Link>
          </button>
        </div>
        <div
          className="row"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
        >
          <LazyLoadImage
            className="img"
            src={categoryImg[1]}
            effect="blur"
            placeholderSrc={categoryImg[1]}
            alt="Shirts"
          />
          <button>
            <Link className="link" to="/products/1">
              Shirts
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div
          className="row"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
        >
          <LazyLoadImage
            className="img"
            src={categoryImg[2]}
            effect="blur"
            placeholderSrc={categoryImg[2]}
            alt="New Products"
          />
          <button>
            <Link className="link" to="/products/3">
              New Products
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div
              className="row"
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in-out"
            >
              <LazyLoadImage
                className="img"
                src={categoryImg[3]}
                effect="blur"
                placeholderSrc={categoryImg[3]}
                alt="Sweatshirts"
              />
              <button>
                <Link className="link" to="/products/4">
                  Sweatshirts
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div
              className="row"
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in-out"
            >
              <LazyLoadImage
                className="img"
                src={categoryImg[4]}
                effect="blur"
                placeholderSrc={categoryImg[4]}
                alt="Accessories"
              />
              <button>
                <Link className="link" to="/products/5">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className="row"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
        >
          <LazyLoadImage
            className="img"
            src={categoryImg[5]}
            effect="blur"
            placeholderSrc={categoryImg[5]}
            alt="Cutleries"
          />
          <button>
            <Link className="link" to="/products/6">
              Cutleries
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
