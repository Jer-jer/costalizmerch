import React from "react";

//? Components
import AboutContent from "../../components/About";

//? Styles
import "./index.scss";
import Team from "../../components/Team";

const About = () => {
  return (
    <div className="main-about">
      <AboutContent />
      <Team />
    </div>
  );
};

export default About;
