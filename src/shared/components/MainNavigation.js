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
        <h1 className="main-navigation__title">
          <Link to="/">
            <FontAwesomeIcon icon={faStackOverflow} size="1.5x" />
            <div className="main-navigation__title a">csit overflow</div>
          </Link>
        </h1>
        {/* <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav> */}
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
