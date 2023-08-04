import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      {/* <li>
        <NavLink to="/"> All Users</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/auth"> SignUp / Login </NavLink>
      </li> */}
      <li>
        <NavLink to="/login" className="nav-links-login-button">
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className="nav-links-signup-button">
          Sign up
        </NavLink>
      </li>
      {/* <li>
        <button onClick={console.log("logout log")}>Log out</button>
      </li> */}
    </ul>
  );
};

export default NavLinks;
