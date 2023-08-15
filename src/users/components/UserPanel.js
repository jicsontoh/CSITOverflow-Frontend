import React, { Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./UserPanel.css";

const UserPanel = ({
  user: { id, username, created_at, post_count, answer_count, votes, gravatar },
}) => {
  return (
    <Fragment>
      <div className="user-panel-info s-card bs-sm h:bs-md fc-black-500">
        <div className="user-gravatar">
          <Link to={`/users/${id}`}>
            <div className="logo-wrapper">
              <img alt="user-logo" src={gravatar} />
            </div>
          </Link>
        </div>
        <div className="user-details">
          <Link className="fc-blue-600" to={`/users/${id}`}>
            {username}
          </Link>
          <span className="item">
            <span className="count">
              {post_count}{" "}
              <span className="count-info">
                {post_count === 1 ? "QUESTION" : "QUESTIONS"}
              </span>
            </span>
          </span>
          <span className="item">
            <span className="count">
              {answer_count}{" "}
              <span className="count-info">
                {answer_count === 1 ? "ANSWER" : "ANSWERS"}
              </span>
            </span>
          </span>
          <span className="item">
            <span className="count">
              {votes}{" "}
              <span className="count-info">
                {votes === 1 ? "VOTE" : "VOTES"}
              </span>
            </span>
          </span>
          <span className="item user-time" style={{ paddingTop: "1px" }}>
            <span className="count" style={{ fontWeight: "400" }}>
              User joined - {moment(created_at).fromNow(false)}
            </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

UserPanel.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserPanel;
