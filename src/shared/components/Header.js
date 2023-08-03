import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  return (
    <header className="navbar fixed-top navbar-expand-lg navbar-light bs-md">
      <Link className="navbar-brand" to="/">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        <span>
          CSIT<b>Overflow</b>
        </span>
      </Link>
    </header>
  );
};

export default Header;
