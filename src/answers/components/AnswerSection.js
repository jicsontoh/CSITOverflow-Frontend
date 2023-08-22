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

// const answers = [
//   {
//     id: "1",
//     body: "answer body",
//     user_id: "userid1",
//     qns_id: "1",
//     up_votes: 10,
//     down_votes: 3,
//     created_at: "2023/07/14, 18:00",
//   },
//   {
//     id: "2",
//     body: "answer body2",
//     user_id: "userid2",
//     qns_id: "2",
//     up_votes: 20,
//     down_votes: 5,
//     created_at: "2023/08/14, 18:00",
//   },
//   {
//     id: "3",
//     body: "answer body3",
//     user_id: "userid3",
//     qns_id: "3",
//     up_votes: 5,
//     down_votes: 1,
//     created_at: "2022/07/14, 18:00",
//   },
// ];

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
          `http://localhost:8080/api/answers/${qnsId}`
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
