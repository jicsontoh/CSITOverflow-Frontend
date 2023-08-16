import React, { Fragment } from "react";

import "./VoteButton.css";

const VoteButton = ({ answerCount, votes }) => {
  return (
    <Fragment>
      <div className="vote-cell fc-black-800">
        <div className="stats">
          <div className="vote">
            <span className="vote-count">{votes}</span>
            <div className="count-text">votes</div>
          </div>
          <div className="vote">
            <span className="vote-count">{answerCount}</span>
            <div className="count-text">answers</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VoteButton;
