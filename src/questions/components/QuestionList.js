import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import PostItem from "./PostItem";

const itemsPerPage = 10;

const QuestionList = (props) => {
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Newest");

  const handlePaginationChange = (e, value) => setPage(value);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1>No Questions found</h1>
      </div>
    );
  }

  return (
    <div className="questions">
      {props.items.map((post) => (
        <PostItem
          key={post.index}
          id={post.id}
          title={post.title}
          body={post.body}
          username={post.username}
          gravatar={post.gravatar}
          user_id={post.user_id}
          answer_count={post.answer_count}
          comment_count={post.comment_count}
          views={post.views}
          votes={post.votes}
          created_at={post.created_at}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default QuestionList;
