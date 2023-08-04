import React from "react";

import "./Header.css";

const Header = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default Header;

/* <header className="navbar fixed-top navbar-expand-lg navbar-light bs-md">
      <Link className="navbar-brand" to="/">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        <div>CSIT Overflow</div>
      </Link>
    </header> */
