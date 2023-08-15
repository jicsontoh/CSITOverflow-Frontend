import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {/* <li>
        <NavLink to="/"> All Users</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/auth"> SignUp / Login </NavLink>
      </li> */}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login" className="nav-links-login-button">
            Log in
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup" className="nav-links-signup-button">
            Sign up
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
