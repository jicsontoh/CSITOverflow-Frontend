import React, { Fragment, useState, useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getAnswers } from "../../../redux/answers/answers.actions";
import handleSorting from "../../shared/util/handleSorting";

// import AnswerItem from "./AnswerItem/AnswerItem.component";
// import Spinner from "../../../components/molecules/Spinner/Spinner.component";
import AnswerForm from "./AnswerForm";
import ButtonGroup from "../../shared/buttons/ButtonGroup";

import "./AnswerSection.css";

const AnswerSection = (props) => {
  const [sortType, setSortType] = useState("Newest");

  return (
    <Fragment>
      <div className="answer">
        <div className="answer-header fc-black-800">
          <div className="answer-sub-header">
            <div className="answer-headline">
              <h2>Answers</h2>
            </div>
          </div>
        </div>
        {/* {answer.loading === null ? (
          <Spinner width='25px' height='25px' />
        ) : (
          answer.answers?.sort(handleSorting(sortType)).map((answer, index) => (
            <div key={index} className='answers'>
              <AnswerItem answer={answer}/>
            </div>
          ))
        )} */}
        <div className="add-answer">{/* <AnswerForm/> */}</div>
      </div>
    </Fragment>
  );
};

export default AnswerSection;
