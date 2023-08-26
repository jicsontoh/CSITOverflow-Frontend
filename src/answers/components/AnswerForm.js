import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {addAnswer} from '../../../../redux/answers/answers.actions';

import LinkButton from "../../shared/buttons/LinkButton";
import { AuthContext } from "../../shared/context/auth-context";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./AnswerForm.css";

const AnswerForm = (props) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();

  const qnsId = props.qnsId;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formData, setFormData] = useState({
    answer: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const postAnswerHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        process.env.REACT_APP_API_URL + "/api/answers/new",
        "POST",
        JSON.stringify({
          answer: formData.answer,
          qns_id: qnsId,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      history(0);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {auth.isLoggedIn ? (
        <form className="answer-form" onSubmit={postAnswerHandler}>
          <div className="answer-grid">
            <label className=" fc-black-800">Your Answer</label>
            <div className="rich-text-editor-container">
              {/* <MDEditor value={null} onChange={null} /> */}
              <textarea
                className="answer-input s-input"
                type="text"
                name="answer"
                rows={15}
                onChange={(e) => onChange(e)}
                // value={username}
                id="answer"
                required
              />
            </div>
            <button className="s-btn s-btn__primary">Post Your Answer</button>
          </div>
        </form>
      ) : (
        <React.Fragment>
          <LinkButton
            text={"You need to login to add an answer"}
            link={"/login"}
            type={"s-btn__outlined"}
            marginTop={"12px"}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AnswerForm;
