import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getAnswers } from "../../../redux/answers/answers.actions";
import handleSorting from "../../shared/util/handleSorting";

// import AnswerItem from "./AnswerItem/AnswerItem.component";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import AnswerForm from "./AnswerForm";
import AnswerItem from "./AnswerItem";

import "./AnswerSection.css";

const AnswerSection = (props) => {
  //   const [sortType, setSortType] = useState("Newest");
  const [loadedAns, setLoadedAns] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const qnsId = props.qns_id;
  //   const answers = props.answers;

  useEffect(() => {
    const fetchAns = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + `/api/answers/${qnsId}`
        );
        setLoadedAns(responseData.ans);
      } catch (err) {}
    };
    fetchAns();
  }, [sendRequest, qnsId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedAns && (
        <div className="answer">
          {loadedAns.length > 0 && (
            <React.Fragment>
              <div className="answer-header fc-black-800">
                <div className="answer-sub-header">
                  <div className="answer-headline">
                    <h1>
                      {loadedAns.length}{" "}
                      {loadedAns.length > 1 ? "Answers" : "Answer"}
                    </h1>
                  </div>
                </div>
              </div>
              {loadedAns.sort(handleSorting("Newest")).map((a) => (
                <div className="answers">
                  <AnswerItem answer={a} />
                  <div className="answer-line"></div>
                </div>
              ))}
            </React.Fragment>
          )}
          <div className="add-answer">{<AnswerForm qnsId={qnsId} />}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AnswerSection;
