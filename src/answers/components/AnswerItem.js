import React, { Fragment } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { deleteAnswer } from "../../../../redux/answers/answers.actions";

import { ReactComponent as UpVote } from "../../assets/ArrowUpLg.svg";
import { ReactComponent as DownVote } from "../../assets/ArrowDownLg.svg";
import UserCard from "../../users/components/UserCard";

import "./AnswerItem.css";

const AnswerItem = ({
  answer: { body, user_id, qns_id, gravatar, id, created_at, username },
}) => {
  //   const auth = useContext(AuthContext);

  return (
    <Fragment>
      <div className="answer-layout">
        <div className="vote-cell">
          <div className="vote-container">
            <button
              className="vote-up"
              title="This answer is useful (click again to undo)"
            >
              <UpVote className="icon" />
            </button>
            <div className="vote-count fc-black-500">0</div>
            <button
              className="vote-down"
              title="This answer is not useful (click again to undo)"
            >
              <DownVote className="icon" />
            </button>
          </div>
        </div>
        <div className="answer-item">
          <div className="answer-content fc-black-800">{body}</div>
          <div className="answer-actions">
            <div className="action-btns">
              <div className="answer-menu">
                {/* {!auth.loading && !auth.isLoggedIn && (
                  <Link
                    className="s-link s-link__danger"
                    style={{ paddingLeft: "4px" }}
                    title="Delete the answer"
                    //   onClick={(e) => deleteAnswer(id)}
                    to={`/questions/${qns_id}`}
                  >
                    delete
                  </Link>
                )} */}
              </div>
            </div>
            <UserCard
              created_at={created_at}
              user_id={user_id}
              gravatar={gravatar}
              username={username}
              dateType={"answered"}
              backgroundColor={"transparent"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AnswerItem;
