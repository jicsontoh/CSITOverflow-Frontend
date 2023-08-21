import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";

// import {
//   VALIDATOR_EMAIL,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_REQUIRE,
// } from "../util/validators";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/http-hook";

import "./AuthPage.css";

const AuthPage = (props) => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    reenterpwd: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { username, password, reenterpwd } = formData;

  const signUpLink = (
    <React.Fragment>
      Already have an account?{" "}
      <NavLink to="/login" name="login">
        Log in
      </NavLink>
    </React.Fragment>
  );

  const logInLink = (
    <React.Fragment>
      Don't have an account?{" "}
      <NavLink to="/signup" name="signup">
        Sign up
      </NavLink>
    </React.Fragment>
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (props.action === "Log in") {
      try {
        const responseData = await sendRequest(
          "http://localhost:8080/api/users/login",
          "POST",
          JSON.stringify({
            username: username,
            password: password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.user.id);
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          "http://localhost:8080/api/users/signup",
          "POST",
          JSON.stringify({
            username: username,
            password: password,
            reenterpwd: reenterpwd,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.user.id);
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div>
        <div className="icon-holder">
          <FontAwesomeIcon icon={faStackOverflow} size="6x" />
          <div className="big-title">csit</div>
        </div>
        <div className="form-container">
          <form className="login-form" onSubmit={authSubmitHandler}>
            <div>
              <label className="form-label s-label">Username</label>
              <input
                className="form-input s-input"
                type="text"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                id="username"
                required
              />
            </div>
            <div>
              <label className="form-label s-label">Password</label>
              <input
                className="form-input s-input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                id="password"
                required
              />
            </div>
            {props.action === "Sign up" && (
              <div>
                <label className="form-label s-label">Re-enter password</label>
                <input
                  className="form-input s-input"
                  type="password"
                  name="reenterpwd"
                  value={reenterpwd}
                  onChange={(e) => onChange(e)}
                  id="reenterpwd"
                  required
                />
              </div>
            )}
            <div className="grid gs4 gsy fd-column js-auth-item ">
              <button
                className="s-btn s-btn__primary"
                id="submit-button"
                name="submit-button"
              >
                {props.action}
              </button>
            </div>
          </form>
        </div>
        <div className="redirects fc-black-500">
          {props.action === "Sign up" ? signUpLink : logInLink}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
