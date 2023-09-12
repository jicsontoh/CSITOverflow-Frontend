import React, { useState, useEffect, useCallback } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getAnswers } from "../../../redux/answers/answers.actions";

// import AnswerItem from "./AnswerItem/AnswerItem.component";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ButtonGroup from "../../shared/buttons/ButtonGroup";

import AnswerForm from "./AnswerForm";
import AnswerList from "./AnswerList";

import "./AnswerSection.css";

const AnswerSection = (props) => {
  const [sortType, setSortType] = useState("Popular");
  const [loadedAns, setLoadedAns] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const qnsId = props.qns_id;
  //   const answers = props.answers;

  const fetchAns = async () => {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_API_URL + `/api/answers/${qnsId}`
      );
      setLoadedAns(responseData.ans);
    } catch (err) {}
  };

  useEffect(() => {
    fetchAns();
  }, [sendRequest, qnsId]);

  const postAnswerHandler = useCallback(() => {
    fetchAns();
  });

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
                  {/* <ButtonGroup
                    buttons={["Popular", "Newest", "Oldest"]}
                    selected={sortType}
                    setSelected={setSortType}
                  /> */}
                </div>
              </div>
              <AnswerList items={loadedAns} sortType={sortType} />
            </React.Fragment>
          )}
          <div className="add-answer">
            {<AnswerForm updateAnswer={postAnswerHandler} qnsId={qnsId} />}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AnswerSection;
