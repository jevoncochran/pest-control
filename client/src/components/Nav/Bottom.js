import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="nav-bottom">
      <div className="nav-bottom-logo-container">
        Knowledgeable Pest Control
      </div>
      <div className="nav-bottom-links">
        <NavLink className="nav-link" to="/">
          HOME
        </NavLink>
        <p>ABOUT US</p>
        <p>APPOINTMENT</p>
        <p>PRICING</p>
        <p>SERVICES</p>
        <NavLink className="nav-link" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Bottom;
