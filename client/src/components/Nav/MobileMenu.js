import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const MobileMenu = (props) => {
  return (
    <div className="nav-mobile-menu">
      <SwipeableDrawer
        open={props.drawerOpen}
        onClose={props.closeDrawer}
        onOpen={props.openDrawer}
        swipeAreaWidth={400}
      >
        <List
          style={{
            width: "200px",
            backgroundColor: "#011048",
            height: "100vh",
            border: "2px solid #f5931e",
            borderLeft: "none",
          }}
        >
          <ListItem>
            <NavLink className="nav-link mobile-nav-link" to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="nav-link mobile-nav-link" to="/about">
              About Us
            </NavLink>
          </ListItem>
          <ListItem>
            <a
              className="nav-link mobile-nav-link"
              href="https://booking-test-5ieia.appointlet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Appointment
            </a>
          </ListItem>
          <ListItem>
            <NavLink className="nav-link mobile-nav-link" to="/services">
              Services
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="nav-link mobile-nav-link" to="/contact">
              Contact
            </NavLink>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default MobileMenu;
