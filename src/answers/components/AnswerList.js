import React from "react";

import AnswerItem from "./AnswerItem";
import handleSorting from "../../shared/util/handleSorting";

// const itemsPerPage = 10;

const AnswerList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="questions-grid">
        <h1>No Answers found</h1>
      </div>
    );
  }
  console.log(props.sortType);
  return (
    <React.Fragment>
      {props.items.sort(handleSorting(props.sortType)).map((a) => (
        <div className="answers">
          <AnswerItem answer={a} />
          <div className="answer-line"></div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default AnswerList;
