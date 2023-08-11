import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
// import {
//   VALIDATOR_EMAIL,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_REQUIRE,
// } from "../util/validators";

import "./AuthPage.css";

const AuthPage = ({ register, login, action }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { username, password } = formData;

  return (
    <React.Fragment>
      <div>
        <div className="icon-holder">
          <FontAwesomeIcon icon={faStackOverflow} size="6x" />
          <div className="big-title">csit</div>
        </div>
        <div className="form-container">
          <form className="login-form" onSubmit={null}>
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
            <div className="grid gs4 gsy fd-column js-auth-item ">
              <button
                className="s-btn s-btn__primary"
                id="submit-button"
                name="submit-button"
              >
                {action}
              </button>
            </div>
          </form>
        </div>
        <div className="redirects fc-black-500">
          {/* {action === "Sign up" ? signUpLink : logInLink} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
