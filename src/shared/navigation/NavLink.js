import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
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
          <NavLink
            to={`/users/${auth.userId}`}
            className="nav-links-login-button"
          >
            My Profile
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/login`}>
            <button onClick={auth.logout}>Log out</button>
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
