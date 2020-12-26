import React from "react";
import "./Intro.scss";
import exterminator from "../../assets/images/exterminator.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-background-container">
        <img
          className="intro-background-img"
          src={exterminator}
          alt="Knowledgeable Pest Control"
        />
        <div className="intro-text-container">
          <div className="intro-slogan-container">
            <p className="intro-slogan">The Brains Behind Pest Control</p>
          </div>
          <div className="intro-btn-container">
            <button className="intro-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
