import React from "react";
import "./About.scss";
import pestControl5 from "../../assets/images/pest-control5.png";
import { GoCheck } from "react-icons/go";
import ServiceArea from "./ServiceArea";

const About = () => {
  return (
    <div className="about">
      <div className="about-img-background">
        <div
          className="about-img"
          style={{ backgroundImage: `url(${pestControl5})` }}
        ></div>
        <div className="about-img-text-container">
          <p className="about-text-large about-text-headline">
            We employ our expertise to help homeowners and businesses maintain a
            clean, healthy and pest-free environment.
          </p>
          <p className="about-text-normal">
            With our free onsite inspections, we identify, clean, and prevent
            rodent infestations. We fix or replace damaged and ineffective
            insulation. We service air ducts, looking for rodent and general
            wear and tear that comprimises air flow and increases heating /
            cooling costs. We are HVAC experts and where necessary, can repair
            or replace entire heating and cooling systems.
          </p>
        </div>
        <div className="about-text-services-container">
          <p className="about-text-services-headline about-text-large">Our services include:</p>
          <div className="about-service-li-div">
            <div className="about-service-li-icon">
              <GoCheck />
            </div>
            <p className="about-text-normal about-service-li-text">
              Attic and Crawlspace Cleaning and Sanitization
            </p>
          </div>
          <div className="about-service-li-div">
            <div className="about-service-li-icon">
              <GoCheck />
            </div>
            <p className="about-text-normal about-service-li-text">
              General Structural Sealing
            </p>
          </div>
          <div className="about-service-li-div">
            <div className="about-service-li-icon">
              <GoCheck />
            </div>
            <p className="about-text-normal about-service-li-text">
              Insulation removal and replacement
            </p>
          </div>
          <div className="about-service-li-div">
            <div className="about-service-li-icon">
              <GoCheck />
            </div>
            <p className="about-text-normal about-service-li-text">
              Air Duct repair and replacement
            </p>
          </div>
          <div className="about-service-li-div">
            <div className="about-service-li-icon">
              <GoCheck />
            </div>
            <p className="about-text-normal about-service-li-text">
              Thermal imaging inspections for heating/cooling efficiency
            </p>
          </div>
        </div>
      </div>
      <ServiceArea />
    </div>
  );
};

export default About;
