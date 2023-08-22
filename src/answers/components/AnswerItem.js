import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { deleteAnswer } from "../../../../redux/answers/answers.actions";

import { ReactComponent as UpVote } from "../../assets/ArrowUpLg.svg";
import { ReactComponent as DownVote } from "../../assets/ArrowDownLg.svg";
import UserCard from "../../users/components/UserCard";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import "./AnswerItem.css";

const AnswerItem = ({
  answer: {
    body,
    user_id,
    up_votes,
    down_votes,
    gravatar,
    id,
    created_at,
    username,
  },
}) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [votes, setVotes] = useState(up_votes - down_votes);

  const updateVote = async () => {
    try {
      await sendRequest(
        `http://localhost:8080/api/answers/${id}`,
        "PATCH",
        JSON.stringify({
          body: body,
          up_votes: up_votes,
          down_votes: down_votes,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };

  const vote = (action) => {
    if (action === "up" && auth.isLoggedIn) {
      up_votes += 1;
      setVotes(votes + 1);
      updateVote();
    } else if (action === "down" && auth.isLoggedIn) {
      down_votes += 1;
      setVotes(votes - 1);
      updateVote();
    } else {
      history("/login");
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && (
        <div className="answer-layout">
          <div className="vote-cell">
            <div className="vote-container">
              <button
                className="vote-up"
                title="This answer is useful (click again to undo)"
                onClick={() => vote("up")}
              >
                <UpVote className="icon" />
              </button>
              <div className="vote-count fc-black-500">{votes}</div>
              <button
                className="vote-down"
                title="This answer is not useful (click again to undo)"
                onClick={() => vote("down")}
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
      )}
    </React.Fragment>
  );
};

export default AnswerItem;
