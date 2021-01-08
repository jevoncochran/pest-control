import React from "react";
import "./Intro.scss";
import { AiTwotonePhone } from "react-icons/ai";
import exterminator2 from "../../assets/images/exterminator2.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-background-container">
        <div
          className="intro-background-img"
          style={{
            backgroundImage: `url(${exterminator2})`,
          }}
        ></div>
        {/* <img
          className="intro-background-img"
          src={exterminator2}
          alt="Knowledgeable Pest Control"
        /> */}
        <div className="intro-text-container">
          <div className="intro-slogan-container">
            <p className="intro-slogan">The Brains Behind Pest Control</p>
          </div>
          <div className="intro-btn-container">
            <button className="intro-btn">LEARN MORE</button>
          </div>
        </div>
        <div className="intro-contact-box-container">
          <div className="intro-contact-box"></div>
          <div className="intro-contact-box-text">
            <p
              className="intro-contact-box-text-large"
              style={{
                textAlign: "center",
              }}
            >
              ALL YOUR PEST CONTROL NEEDS
            </p>
            <div className="intro-contact-box-number-div">
              <div className="intro-contact-box-text-large intro-contact-box-phone-icon">
                <AiTwotonePhone />
              </div>
              <p className="intro-contact-box-text-large">(586) 553-7915</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
