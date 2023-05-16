import React, { useState } from "react";
import { useParams } from "react-router-dom";

//? Components
import List from "../../components/List";

//? Functions
import useFetch from "../../hooks/useFetch";

//? Styles
import "./index.scss";

const img = ["/img/carousel2.jpg"];

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("desc");
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;

    setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, e.target.value]
        : selectedSubCategory.filter((choice) => choice !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <div className="checkboxes">
              {data?.map((item) => (
                <div className="checkbox" key={item.id}>
                  <label className="material-checkbox" htmlFor={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    {item.attributes.title}
                  </label>
                </div>
              ))}
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
        <List
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
          subCategory={selectedSubCategory}
        />
      </div>
    </div>
  );
};

export default Products;
