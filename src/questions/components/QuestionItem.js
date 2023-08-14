import React from "react";

import { NavLink, useParams } from "react-router-dom";
import SideBar from "../../shared/components/SideBar";

import moment from "moment";

import "./QuestionItem.css";
import VoteButton from "../../shared/buttons/VoteButton";

const posts = [
  {
    id: "1",
    title: "qns title",
    body: "question body",
    username: "username",
    gravatar: "image",
    user_id: "userid1",
    answer_count: 10,
    comment_count: 20,
    views: 27,
    votes: 10,
    created_at: "2023/08/14, 13:00",
    tags: "tags",
  },
  {
    id: "2",
    title: "qns title2",
    body: "question body222",
    username: "username",
    gravatar: "image",
    user_id: "userid1",
    answer_count: 10,
    comment_count: 20,
    views: 30,
    votes: 11,
    created_at: "2023/07/14, 13:00",
    tags: "tags",
  },
  {
    id: "3",
    title: "qns title3",
    body: "question body333",
    username: "username2",
    gravatar: "image",
    user_id: "userid2",
    answer_count: 5,
    comment_count: 10,
    views: 24,
    votes: 15,
    created_at: "2023/06/14, 13:00",
    tags: "tags",
  },
];

const QuestionItem = (props) => {
  const qnsId = useParams().questionId;
  const loadedQns = posts.filter((qns) => qns.id === qnsId)[0];

  return (
    <React.Fragment>
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
              <span className="fc-light">Asked </span>
              <time dateTime={moment(loadedQns.created_at).fromNow(true)}>
                {moment(loadedQns.created_at).fromNow(true)} ago
              </time>
            </div>
          </div>

          <div className="question-line"></div>

          <div className="question-main pl24 pt16">
            <div className="question">
              <div className="post-layout">
                <VoteButton
                  answerCount={loadedQns.answer_count}
                  commentCount={loadedQns.comment_count}
                />

                <div className="question-body">{loadedQns.body}</div>
                {/* <PostCell/> */}
                {/* <CommentCell/> */}
              </div>
            </div>
          </div>

          <div className="question-line"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionItem;
