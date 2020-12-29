import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

const Bottom = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    console.log("drawerOpen: ", drawerOpen);
  }, [drawerOpen]);

  return (
    <div className="nav-bottom">
      <div className="nav-bottom-logo-container">
        Knowledgeable Pest Control
      </div>
      <div className="nav-bottom-links mobile-hide">
        <NavLink className="nav-link" to="/">
          HOME
        </NavLink>
        <NavLink className="nav-link" to="/about">
          ABOUT US
        </NavLink>
        <a
          href="https://booking-test-5ieia.appointlet.com"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPOINTMENT
        </a>
        <NavLink className="nav-link" to="/services">
          SERVICES
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          CONTACT
        </NavLink>
      </div>
      <div className="nav-bottom-hamburger-icon" onClick={toggleDrawer}>
        <GiHamburgerMenu />
      </div>
      <MobileMenu
        className="nav-mobile-menu"
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        drawerOpen={drawerOpen}
        style={{ width: "80%", border: "2px solid green" }}
      />
    </div>
  );
};

export default Bottom;
