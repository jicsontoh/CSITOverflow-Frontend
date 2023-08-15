import React, { Fragment, useState, useRef, useContext } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {addAnswer} from '../../../../redux/answers/answers.actions';

import LinkButton from "../../shared/buttons/LinkButton";
import { AuthContext } from "../../shared/context/auth-context";

import "./AnswerForm.css";

const AnswerForm = (props) => {
  const auth = useContext(AuthContext);

  const [formData, setFormData] = useState({
    text: "",
  });

  const markdownEditorRef = useRef(null);

  const { text } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addAnswer(post.id, { text });
    setFormData({
      text: "",
    });
    markdownEditorRef.current.cleanEditorState();
  };

  //   const updateConvertedContent = (htmlConvertedContent) => {
  //     setFormData({ ...formData, text: htmlConvertedContent });
  //   };

  return (
    <Fragment>
      {auth.isLoggedIn ? (
        <Fragment>
          <form className="answer-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="answer-grid">
              <label className=" fc-black-800">Your Answer</label>
              <div className="s-textarea rich-text-editor-container">
                <textarea
                  className="form-input s-input"
                  type="text"
                  name="question"
                  rows={18}
                  // value={username}
                  id="question"
                  required
                />
              </div>
              <button className="s-btn s-btn__primary">Post Your Answer</button>
            </div>
          </form>
        </Fragment>
      ) : (
        <Fragment>
          <LinkButton
            text={"You need to login to add an answer"}
            link={"/login"}
            type={"s-btn__outlined"}
            marginTop={"12px"}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default AnswerForm;
