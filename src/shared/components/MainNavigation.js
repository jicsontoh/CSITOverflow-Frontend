import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";

import NavLinks from "../navigation/NavLink";
import Header from "./Header";
import SearchBox from "./SearchBox";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [setSearch] = useState("");

  // const search = () => {
  //   console.log("searching...");
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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
        <SearchBox
          placeholder={"Search..."}
          handleChange={handleChange}
          width={"550px"}
        />
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
