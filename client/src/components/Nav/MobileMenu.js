import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const MobileMenu = (props) => {
  return (
    <div className="nav-mobile-menu" style={{ width: "80% !important" }}>
      <SwipeableDrawer
        width="800px"
        style={{ border: "1px solid black" }}
        open={props.drawerOpen}
        onClose={props.closeDrawer}
        onOpen={props.openDrawer}
        swipeAreaWidth={400}
      >
        <List style={{ width: "100px !important" }}>
          <ListItem>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </ListItem>
          <ListItem>
            <a
              className="nav-link"
              href="https://booking-test-5ieia.appointlet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Appointment
            </a>
          </ListItem>
          <ListItem>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default MobileMenu;
