import React from "react";
import "./Contact.scss";
import detroitSkyline from "../../assets/images/detroit-skyline.jpg";

const ContactImage = () => {
  return (
    <div className="contact-image">
      <div
        className="contact-image-img"
        style={{ backgroundImage: `url(${detroitSkyline})` }}
      ></div>
    </div>
  );
};

export default ContactImage;
