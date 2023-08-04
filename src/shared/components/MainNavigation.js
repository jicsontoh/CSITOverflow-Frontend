import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";

// import NavLinks from "./NavLinks";
import Header from "./Header";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <Header>
        <div className="main-navigation__title">
          <Link to="/">
            <FontAwesomeIcon icon={faStackOverflow} size="3x" />
            <div className="small-title">csit</div>
            <div className="big-title">overflow</div>
          </Link>
        </div>
        {/* <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav> */}
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
