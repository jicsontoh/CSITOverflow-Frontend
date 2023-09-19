import React, { useContext, useState, useEffect } from "react";
import moment from "moment";

import { NavLink, useParams, useNavigate } from "react-router-dom";
import SideBar from "../../shared/components/SideBar";

import { ReactComponent as UpVote } from "../../assets/ArrowUpLg.svg";
import { ReactComponent as DownVote } from "../../assets/ArrowDownLg.svg";

import { AuthContext } from "../../shared/context/auth-context";

import VoteButton from "../../shared/buttons/VoteButton";
import UserCard from "../../users/components/UserCard";
import AnswerSection from "../../answers/components/AnswerSection";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import share from "../../assets/share-icon.png";
import Viewer from "../../shared/markdown/Viewer";

import "./QuestionItem.css";

const QuestionItem = (props) => {
  const auth = useContext(AuthContext);
  const history = useNavigate();

  const [loadedQns, setLoadedQns] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [votes, setVotes] = useState(0);

  const qnsId = useParams().questionId;

  useEffect(() => {
    const fetchQns = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + `/api/questions/${qnsId}`
        );
        setLoadedQns(responseData.qns);
        setVotes(
          responseData.qns.up_votes.length - responseData.qns.down_votes.length
        );
      } catch (err) {}
    };
    fetchQns();
  }, [sendRequest, qnsId]);

  const updateVote = async (props) => {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_API_URL + `/api/questions/vote/${qnsId}`,
        "PATCH",
        JSON.stringify({
          up_id: props.up,
          down_id: props.down,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      setLoadedQns(responseData.qns);
    } catch (err) {}
  };

  const vote = (action) => {
    if (action === "up" && auth.isLoggedIn) {
      if (!loadedQns.up_votes.includes(auth.userId)) {
        setVotes(votes + 1);
      } else {
        setVotes(votes - 1);
      }
      updateVote({ up: auth.userId });
    } else if (action === "down" && auth.isLoggedIn) {
      if (!loadedQns.down_votes.includes(auth.userId)) {
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
      {!isLoading && loadedQns && (
        <div className="page">
          <SideBar />
          <div id="mainbar" className="questions-page">
            <div className="questions-grid">
              <h3 className="question-headline">{loadedQns.title}</h3>
              <NavLink to="/questions/new" className="qns-button">
                Ask Question
              </NavLink>
            </div>

            <div className="question-date fc-black-800 pl24">
              <div className="grid-cell">
                <span className="fc-light special-spaced">Asked </span>
                <time dateTime={moment(loadedQns.created_at).fromNow(true)}>
                  {moment(loadedQns.created_at).fromNow(true)} ago
                </time>
                <NavLink
                  className="post-links"
                  title="short permalink to this question"
                  to="/"
                >
                  <img src={share} className="share-icon" />
                </NavLink>
              </div>
            </div>

            <div className="question-line"></div>

            <div className="question-main pl24 pt16">
              <div className="question">
                <div className="post-layout">
                  {auth.isLoggedIn && auth.userId === loadedQns.user_id ? (
                    <VoteButton
                      answerCount={loadedQns.answers.length}
                      votes={votes}
                    />
                  ) : (
                    <div className="vote-cell">
                      <div className="vote-container">
                        <button
                          className={
                            loadedQns.up_votes.includes(auth.userId) &&
                            "button-selected"
                          }
                          title="This answer is useful (click again to undo)"
                          onClick={() => vote("up")}
                        >
                          <UpVote className="icon" />
                        </button>
                        <div className="vote-count fc-black-500">{votes}</div>
                        <button
                          className={
                            loadedQns.down_votes.includes(auth.userId) &&
                            "button-selected"
                          }
                          title="This answer is not useful (click again to undo)"
                          onClick={() => vote("down")}
                        >
                          <DownVote className="icon" />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="question-body">
                    <Viewer body={loadedQns.body} />
                  </div>
                  <div className="post-cell">
                    <div className="post-actions fc-black-800">
                      <div className="post-actions-extended">
                        <div className="post-btns"></div>
                        <UserCard
                          created_at={loadedQns.created_at}
                          user_id={loadedQns.user_id}
                          gravatar={loadedQns.gravatar}
                          username={loadedQns.username}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="question-line"></div>

            <div className="pl24 pt16">
              <AnswerSection qns_id={qnsId} answers={loadedQns.answers} />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default QuestionItem;
