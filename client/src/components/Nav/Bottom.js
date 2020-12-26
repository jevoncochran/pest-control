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
        <NavLink className="nav-link" to="/about">
          ABOUT US
        </NavLink>
        <NavLink className="nav-link" to="/appointment">
          APPOINTMENT
        </NavLink>
        <NavLink className="nav-link" to="/pricing">
          PRICING
        </NavLink>
        <NavLink className="nav-link" to="/services">
          SERVICES
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Bottom;
