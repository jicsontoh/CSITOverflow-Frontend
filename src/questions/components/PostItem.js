import React from "react";
import { Link } from "react-router-dom";

import UserCard from "../../users/components/UserCard";
// import TagBadge from "../../tags/components/TagBadge";

import "./PostItem.css";

const PostItem = (props) => {
  const answerVoteUp = (
    <div className="vote answer">
      <span className="vote-count">{props.answer_count}</span>
      <div className="count-text">
        {props.answer_count > 1 ? "answers" : "answer"}
      </div>
    </div>
  );

  const answerVoteDown = (
    <div className="vote">
      <span className="vote-count">{props.answer_count}</span>
      <div className="count-text">answers</div>
    </div>
  );

  return (
    <div className="posts">
      <div className="stats-container fc-black-500">
        <div className="stats">
          <div className="vote">
            <div className="count-text">
              {props.votes} {props.votes == 1 ? " vote" : " votes"}
            </div>
          </div>
          {props.answer_count > 0 ? answerVoteUp : answerVoteDown}
        </div>
      </div>
      <div className="summary">
        <h3>
          <Link to={`/questions/${props.id}`}>{props.title}</Link>
        </h3>
        <div className="brief">{props.body}</div>
        <UserCard
          created_at={props.created_at}
          user_id={props.user_id}
          gravatar={props.gravatar}
          username={props.username}
          float={"right"}
          backgroundColor={"transparent"}
        />
      </div>
    </div>
  );
};

export default PostItem;
