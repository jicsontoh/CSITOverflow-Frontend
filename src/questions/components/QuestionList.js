import React, { useState } from "react";

import PostItem from "./PostItem";
import handleSorting from "../../shared/util/handleSorting";
import Pagination from "../../shared/components/Pagination";

const itemsPerPage = 10;

const QuestionList = (props) => {
  const [page, setPage] = useState(1);

  const handlePaginationChange = (e, value) => setPage(value);

  if (props.items.length === 0) {
    return (
      <div className="questions-grid">
        <h1>No Questions found</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="questions">
        {props.items
          .sort(handleSorting(props.sortType))
          .slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
          )
          .map((post) => (
            <PostItem
              key={post.id}
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
      <Pagination
        page={page}
        itemList={props.items}
        itemsPerPage={itemsPerPage}
        handlePaginationChange={handlePaginationChange}
      />
    </React.Fragment>
  );
};

export default QuestionList;
