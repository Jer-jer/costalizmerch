import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

//? Functions
import useFetch from "../../hooks/useFetch";

//? Styles
import "./index.scss";
import "@splidejs/react-splide/css/skyblue";

const options = {
  type: "loop",
  autoplay: true,
  interval: 3000,
  resetProgress: false,
  height: "25rem",
  width: "25rem",
  perPage: 1,
  drag: true,
  lazyLoad: "sequential",
  arrows: false,
  arrowPath:
    "M16.000,32.000 C7.178,32.000 0.000,24.822 0.000,16.000 C0.000,7.178 7.178,-0.000 16.000,-0.000 C24.822,-0.000 32.000,7.178 32.000,16.000 C32.000,24.822 24.822,32.000 16.000,32.000 ZM16.000,2.000 C8.280,2.000 2.000,8.280 2.000,16.000 C2.000,23.720 8.280,30.000 16.000,30.000 C23.720,30.000 30.000,23.720 30.000,16.000 C30.000,8.280 23.720,2.000 16.000,2.000 ZM23.923,16.382 C23.872,16.505 23.799,16.615 23.706,16.708 L19.707,20.707 C19.512,20.902 19.256,21.000 19.000,21.000 C18.744,21.000 18.488,20.902 18.293,20.707 C17.902,20.316 17.902,19.684 18.293,19.293 L20.586,17.000 L9.000,17.000 C8.448,17.000 8.000,16.552 8.000,16.000 C8.000,15.448 8.448,15.000 9.000,15.000 L20.586,15.000 L18.293,12.707 C17.902,12.316 17.902,11.684 18.293,11.293 C18.684,10.902 19.316,10.902 19.707,11.293 L23.706,15.292 C23.799,15.385 23.872,15.495 23.923,15.618 C24.024,15.862 24.024,16.138 23.923,16.382 Z",
};

const TrendingProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][product_type][$eq]=${type}`
  );

  return (
    <div className="featured-products">
      <div className="right">
        <Splide
          options={options}
          aria-label="Main Activities at Costa Liz Resort"
        >
          {error ? (
            "Something went wrong."
          ) : loading ? (
            <img src="/img/oval.svg" alt="loding" />
          ) : (
            data?.map((item) => (
              <SplideSlide key={item.id}>
                <img
                  className="item"
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    item.attributes?.img?.data?.attributes?.url
                  }
                  data-splide-lazy={
                    process.env.REACT_APP_UPLOAD_URL +
                    item.attributes?.img?.data?.attributes?.url
                  }
                  alt="Carousel Img"
                />
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
      <div className="left">
        <div className="top">
          <h1>Featured Products</h1>
        </div>
        <div className="bottom">
          <span>
            The merchandise made with the very best material Costa Liz has to
            offer, Guaranteed you will have zero regrets buying these products,
            and also don't be hesitate to check our other products especially
            the Trending ones, they're just as good but of course these are
            better.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
