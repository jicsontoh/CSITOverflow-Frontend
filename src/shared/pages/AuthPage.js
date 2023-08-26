import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";

import M1 from "../../assets/Avatars/male1.png";
import M2 from "../../assets/Avatars/male2.png";
import M3 from "../../assets/Avatars/male3.png";
import M4 from "../../assets/Avatars/male4.png";
import F1 from "../../assets/Avatars/female1.png";
import F2 from "../../assets/Avatars/female2.png";
import F3 from "../../assets/Avatars/female3.png";
import F4 from "../../assets/Avatars/female4.png";

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
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    reenterpwd: "",
    avatar: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { username, password, reenterpwd, avatar } = formData;

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

  const selectAvatar = (event) => {
    setFormData({
      username,
      password,
      reenterpwd,
      avatar: event.currentTarget.id,
    });
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (props.action === "Log in") {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + "/api/users/login",
          "POST",
          JSON.stringify({
            username: username,
            password: password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.user.id, responseData.token);
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + "/api/users/signup",
          "POST",
          JSON.stringify({
            username: username,
            password: password,
            reenterpwd: reenterpwd,
            avatar: avatar,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.user.id, responseData.token);
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
            {props.action === "Sign up" && (
              <React.Fragment>
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
                <label className="form-label s-label">Select Avatar</label>
                <div className="avatar">
                  <button
                    id="M1"
                    type="button"
                    className={avatar === "M1" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={M1} alt="M1" height={100} width={100} />
                  </button>
                  <button
                    id="M2"
                    type="button"
                    className={avatar === "M2" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={M2} alt="M2" height={100} width={100} />
                  </button>
                  <button
                    id="M3"
                    type="button"
                    className={avatar === "M3" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={M3} alt="M3" height={100} width={100} />
                  </button>
                  <button
                    id="M4"
                    type="button"
                    className={avatar === "M4" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={M4} alt="M4" height={100} width={100} />
                  </button>
                </div>
                <div className="avatar">
                  <button
                    id="F1"
                    type="button"
                    className={avatar === "F1" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={F1} alt="F1" height={100} width={100} />
                  </button>
                  <button
                    id="F2"
                    type="button"
                    className={avatar === "F2" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={F2} alt="F2" height={100} width={100} />
                  </button>
                  <button
                    id="F3"
                    type="button"
                    className={avatar === "F3" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={F3} alt="F3" height={100} width={100} />
                  </button>
                  <button
                    id="F4"
                    type="button"
                    className={avatar === "F4" && "clicked"}
                    onClick={selectAvatar}
                  >
                    <img src={F4} alt="F4" height={100} width={100} />
                  </button>
                </div>
              </React.Fragment>
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
