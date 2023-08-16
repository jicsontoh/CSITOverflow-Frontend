import React, { Fragment, useState, useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getAnswers } from "../../../redux/answers/answers.actions";
import handleSorting from "../../shared/util/handleSorting";

// import AnswerItem from "./AnswerItem/AnswerItem.component";
// import Spinner from "../../../components/molecules/Spinner/Spinner.component";
import AnswerForm from "./AnswerForm";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import AnswerItem from "./AnswerItem";

import "./AnswerSection.css";

const answers = [
  {
    id: "1",
    body: "answer body",
    user_id: "userid1",
    qns_id: "1",
    up_votes: 10,
    down_votes: 3,
    created_at: "2023/07/14, 18:00",
  },
  {
    id: "2",
    body: "answer body2",
    user_id: "userid2",
    qns_id: "2",
    up_votes: 20,
    down_votes: 5,
    created_at: "2023/08/14, 18:00",
  },
  {
    id: "3",
    body: "answer body3",
    user_id: "userid3",
    qns_id: "3",
    up_votes: 5,
    down_votes: 1,
    created_at: "2022/07/14, 18:00",
  },
];

const AnswerSection = (props) => {
  const [sortType, setSortType] = useState("Newest");
  const ans = answers.filter((a) => a.qns_id !== props.qns_id);

  return (
    <Fragment>
      <div className="answer">
        {ans.length > 0 && (
          <React.Fragment>
            <div className="answer-header fc-black-800">
              <div className="answer-sub-header">
                <div className="answer-headline">
                  <h1>
                    {ans.length} {ans.length > 1 ? "Answers" : "Answer"}
                  </h1>
                </div>
              </div>
            </div>
            {ans.sort(handleSorting(sortType)).map((a) => (
              <div className="answers">
                <AnswerItem answer={a} />
                <div className="answer-line"></div>
              </div>
            ))}
          </React.Fragment>
        )}
        <div className="add-answer">{<AnswerForm />}</div>
      </div>
    </Fragment>
  );
};

export default AnswerSection;
