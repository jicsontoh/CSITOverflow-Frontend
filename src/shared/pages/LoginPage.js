import React from "react";

import AuthPage from "./AuthPage";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <AuthPage action={"Log in"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
