import React, { useState } from "react";

import AuthPage from "./AuthPage";

const NewQuestionPage = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <React.Fragment>
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <div>
              <div className="form-container">
                <form className="login-form" onSubmit={null}>
                  <div>
                    <label className="form-label s-label">Title</label>
                    <input
                      className="form-input s-input"
                      type="text"
                      name="title"
                      // value={username}
                      onChange={(e) => onChange(e)}
                      id="title"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label s-label">Tags</label>
                    <input
                      className="form-input s-input"
                      type="text"
                      name="tags"
                      // value={username}
                      onChange={(e) => onChange(e)}
                      id="tags"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label s-label">Question</label>
                    <textarea
                      className="form-input s-input"
                      type="text"
                      name="question"
                      rows={18}
                      // value={username}
                      onChange={(e) => onChange(e)}
                      id="question"
                      required
                    />
                  </div>
                  <div className="grid gs4 gsy fd-column js-auth-item ">
                    <button
                      className="s-btn s-btn__primary"
                      id="submit-button"
                      name="submit-button"
                    >
                      Post Question
                    </button>
                  </div>
                </form>
              </div>
              <div className="redirects fc-black-500">
                {/* {action === "Sign up" ? signUpLink : logInLink} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewQuestionPage;
