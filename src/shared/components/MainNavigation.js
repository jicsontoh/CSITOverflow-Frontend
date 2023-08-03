import React from "react";
import { Link } from "react-router-dom";

// import NavLinks from "./NavLinks";
import Header from "./Header";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <Header>
        <h1 className="main-navigation__title">
          <Link to="/">GoWhere</Link>
        </h1>
        {/* <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav> */}
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
