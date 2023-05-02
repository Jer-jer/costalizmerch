import React from "react";

//? Components
import Carousel from "../../components/Carousel";
import FeaturedProducts from "../../components/FeaturedProducts";

//? Styles
import "./index.scss";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <FeaturedProducts />
      <Categories />
      <Contact />
    </div>
  );
};

export default Home;
