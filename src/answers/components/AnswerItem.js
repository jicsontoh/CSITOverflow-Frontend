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

const AnswerItem = ({ answer }) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedAns, setLoadedAns] = useState(answer);
  const [votes, setVotes] = useState(
    loadedAns.up_votes.length - loadedAns.down_votes.length
  );

  const updateVote = async (props) => {
    try {
      const responseData = await sendRequest(
        `http://localhost:8080/api/answers/vote/${loadedAns.id}`,
        "PATCH",
        JSON.stringify({
          up_id: props.up,
          down_id: props.down,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setLoadedAns(responseData.ans);
    } catch (err) {}
  };

  const vote = (action) => {
    if (action === "up" && auth.isLoggedIn) {
      if (!loadedAns.up_votes.includes(auth.userId)) {
        setVotes(votes + 1);
      } else {
        setVotes(votes - 1);
      }
      updateVote({ up: auth.userId });
    } else if (action === "down" && auth.isLoggedIn) {
      if (!loadedAns.down_votes.includes(auth.userId)) {
        setVotes(votes - 1);
      } else {
        setVotes(votes + 1);
      }
      updateVote({ down: auth.userId });
    } else {
      history("/login");
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedAns && (
        <div className="answer-layout">
          <div className="vote-cell">
            <div className="vote-container">
              <button
                className={
                  loadedAns.up_votes.includes(auth.userId) && "button-selected"
                }
                title="This answer is useful (click again to undo)"
                onClick={() => vote("up")}
              >
                <UpVote className="icon" />
              </button>
              <div className="vote-count fc-black-500">{votes}</div>
              <button
                className={
                  loadedAns.down_votes.includes(auth.userId) &&
                  "button-selected"
                }
                title="This answer is not useful (click again to undo)"
                onClick={() => vote("down")}
              >
                <DownVote className="icon" />
              </button>
            </div>
          </div>
          <div className="answer-item">
            <div className="answer-content fc-black-800">{loadedAns.body}</div>
            <div className="answer-actions">
              <div className="action-btns">
                <div className="answer-menu"></div>
              </div>
              <UserCard
                created_at={loadedAns.created_at}
                user_id={loadedAns.user_id}
                gravatar={loadedAns.gravatar}
                username={loadedAns.username}
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
