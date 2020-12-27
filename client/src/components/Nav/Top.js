import React from "react";
import "./Nav.scss";
import { AiTwotonePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaPinterest, FaVimeoV } from "react-icons/fa";

const Top = () => {
  return (
    <div className="nav-top">
      <div className="nav-top-contact-container">
        <div className="nav-top-link-container">
          <div className="nav-top-contact-icon">
            <AiTwotonePhone />
          </div>
          <p className="nav-top-contact-text">
            <span className="nav-top-contact-number">(586)</span>
            <span className="nav-top-contact-number">553</span>
            <span className="nav-top-contact-number">7915</span>
          </p>
        </div>
        <div className="nav-top-link-container">
          <div className="nav-top-contact-icon">
            <HiOutlineMail />
          </div>
          <p className="nav-top-contact-text">
            knowledgeablepestcontrol@yahoo.com
          </p>
        </div>
      </div>
      <div className="nav-top-link-container nav-top-social-container">
        <FaFacebookF />
        <FaTwitter />
        <FaPinterest />
        <FaVimeoV />
      </div>
    </div>
  );
};

export default Top;
