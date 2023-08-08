import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import { ReactComponent as Search } from "../../assets/Search.svg";

import NavLinks from "../navigation/NavLink";
import Header from "./Header";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const search = () => {
    console.log("searching...");
  };

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
        <form
          id="search"
          onSubmit={search}
          className={`searchbar`}
          autoComplete="off"
        >
          <div className="search-frame">
            <Search className="search-icon" />
            <input
              className="search"
              autoComplete="off"
              type="text"
              name="search"
              maxLength="35"
              placeholder="Search..."
            />
          </div>
        </form>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
