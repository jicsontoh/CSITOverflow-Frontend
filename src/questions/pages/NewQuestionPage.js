import React, { useState, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import Editor from "../../shared/markdown/Editor";

import "./NewQuestionPage.css";

const NewQuestionPage = (props) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    question: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const postQuestionHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        process.env.REACT_APP_API_URL + "/api/questions/new",
        "POST",
        JSON.stringify({
          title: formData.title,
          tags: formData.tags,
          question: formData.question,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      history("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <div>
              <div className="question-container">
                <form className="login-form" onSubmit={postQuestionHandler}>
                  <div>
                    <label className="form-label s-label">Title</label>
                    <label className="form-sub-label">
                      Be specific and imagine you’re asking a question to
                      another person
                    </label>
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
                  {/* <div>
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
                  </div> */}
                  <div>
                    <label className="form-label s-label">Body</label>
                    <label className="form-sub-label">
                      Include all the information someone would need to answer
                      your question
                    </label>
                    <Editor id="question" />
                    {/* <textarea
                      className="form-input s-input"
                      type="text"
                      name="question"
                      rows={18}
                      // value={username}
                      onChange={(e) => onChange(e)}
                      id="question"
                      required
                    /> */}
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
