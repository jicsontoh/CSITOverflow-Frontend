import React from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../components/SideBar";
import QuestionList from "../../questions/components/QuestionList";

import "./HomePage.css";

const posts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const HomePage = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="homepage">
          <div className="questions-grid">
            <h3 className="questions-headline">Top Questions</h3>
            <NavLink to="/questions/new" className="ask-qns-button">
              Ask Question
            </NavLink>
          </div>

          <QuestionList items={posts} sortType="Top" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
