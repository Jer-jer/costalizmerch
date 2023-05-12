import React, { useState } from "react";

//? Components
import List from "../../components/List";

//? Styles
import "./index.scss";
import { useParams } from "react-router-dom";

const img = ["/img/carousel2.jpg"];

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <div className="checkboxes">
              <div className="checkbox">
                <label className="material-checkbox" htmlFor="1">
                  <input type="checkbox" id="1" value={1} />
                  <span className="checkmark"></span>
                  Shirts
                </label>
              </div>

              <div className="checkbox">
                <label className="material-checkbox" htmlFor="2">
                  <input type="checkbox" id="2" value={2} />
                  <span className="checkmark"></span>
                  Sweatshirts
                </label>
              </div>

              <div className="checkbox">
                <label className="material-checkbox" htmlFor="3">
                  <input type="checkbox" id="3" value={3} />
                  <span className="checkmark"></span>
                  Accessories
                </label>
              </div>

              <div className="checkbox">
                <label className="material-checkbox">
                  <input type="checkbox" id="4" value={4} />
                  <span className="checkmark"></span>
                  Cutleries
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter By Price</h2>
          <div className="input-item">
            <div className="price-range">
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>Php. {maxPrice}.00</span>
            </div>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort By</h2>
          <div className="input-item">
            <div className="sort-by">
              <label>
                <input
                  type="radio"
                  name="radio"
                  id="desc"
                  value={"desc"}
                  onChange={(e) => setSort(e.target.value)}
                />
                <span>Price &#40;Highest First&#41;</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  id="asc"
                  value={"asc"}
                  onChange={(e) => setSort(e.target.value)}
                />
                <span>Price &#40;Lowest First&#41;</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="category-image" src={img[0]} alt="Category Banner" />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
