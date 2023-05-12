import React from "react";

//? Components
import Carousel from "../../components/Carousel";
import TrendingProducts from "../../components/TrendingProducts";
import FeaturedProducts from "../../components/FeaturedProducts";

//? Styles
import "./index.scss";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <TrendingProducts type={"trending"} />
      <Categories />
      <FeaturedProducts type={"featured"} />
      <Contact />
    </div>
  );
};

export default Home;
