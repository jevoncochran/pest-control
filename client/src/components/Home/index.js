import React from "react";
import Intro from "../Intro";
import Inquiry from "./Inquiry";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Inquiry />
    </div>
  );
};

export default Home;
