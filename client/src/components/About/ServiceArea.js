import React from "react";
import "./About.scss";
import metroDetroitMap from "../../assets/images/metro-detroit-map.png";

const ServiceArea = () => {
  return (
    <div className="about-service-area">
      <p className="about-service-area-headline">We serve the entire Metro Detroit region</p>
      <img
        className="about-serive-area-img"
        src={metroDetroitMap}
        alt="Knowledgeable Pest Control service area"
      />
    </div>
  );
};

export default ServiceArea;
