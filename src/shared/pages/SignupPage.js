import React from "react";

import AuthPage from "./AuthPage";

const SignUpPage = (props) => {
  return (
    <React.Fragment>
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <AuthPage action={"Sign up"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpPage;
