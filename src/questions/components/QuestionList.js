import React from "react";

import PostItem from "./PostItem";
import handleSorting from "../../shared/util/handleSorting";

// const itemsPerPage = 10;

const QuestionList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="questions-grid">
        <h1>No Questions found</h1>
      </div>
    );
  }

  return (
    <div className="questions">
      {props.items.sort(handleSorting(props.sortType)).map((post) => (
        <PostItem
          key={post.index}
          id={post.id}
          title={post.title}
          body={post.body}
          username={post.username}
          gravatar={post.gravatar}
          user_id={post.user_id}
          answer_count={post.answers.length}
          votes={post.up_votes.length - post.down_votes.length}
          created_at={post.created_at}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default QuestionList;
