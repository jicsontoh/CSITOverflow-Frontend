import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import "./SideBar.css";

const SideBarItem = ({ link, icon, text, isHome }) => {
  return (
    <Fragment>
      {isHome ? (
        <HomeItem link={link} text={text} />
      ) : (
        <DefaultItem link={link} icon={icon} text={text} />
      )}
    </Fragment>
  );
};

const HomeItem = ({ link, text }) => (
  <NavLink
    exact="true"
    activeclassname="active"
    className="home-link nav-link"
    to={link}
  >
    <ListItem disablePadding>
      <ListItemButton style={{ paddingLeft: "8px" }}>
        <ListItemText className="menu-list-text" primary={text} />
      </ListItemButton>
    </ListItem>
  </NavLink>
);

const DefaultItem = ({ link, icon, text }) => (
  <NavLink activeclassname="active" className="icon-link nav-link" to={link}>
    <ListItem disablePadding>
      <ListItemButton className="menu-list-btn">
        <ListItemIcon className="menu-list-icon">{icon}</ListItemIcon>
        <ListItemText className="menu-list-text" primary={text} />
      </ListItemButton>
    </ListItem>
  </NavLink>
);

SideBarItem.defaultProps = {
  isHome: false,
};

export default SideBarItem;
