import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";
import kpcLogo from "../../assets/images/kpc_logo.png";

const Top = () => {
  return (
    <div className="nav-top">
      <NavLink to="/" className="nav-top-logo-container">
        <div>
          <img
            className="nav-top-logo"
            src={kpcLogo}
            alt="Knowledgeable Pest Control logo"
          />
        </div>
      </NavLink>
      <div className="nav-top-contact-div">
        <div className="nav-top-contact-icon">
          <AiTwotonePhone />
        </div>
        <span className="nav-top-contact-number">(586)</span>
        <span className="nav-top-contact-number">553</span>
        <span className="nav-top-contact-number">7915</span>
      </div>
    </div>
  );
};

export default Top;
