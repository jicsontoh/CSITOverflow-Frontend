import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../../shared/components/SideBar";
import ButtonGroup from "../../shared/buttons/ButtonGroup";

import "./QuestionsPage.css";
import QuestionList from "../components/QuestionList";

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
    views: 100,
    created_at: "date",
    tags: "tags",
  },
];

const QuestionsPage = () => {
  const [sortType, setSortType] = useState("Newest");

  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="questions-page">
          <div className="questions-grid">
            <h3 className="questions-headline">All Questions</h3>
            <NavLink to="/questions/new" className="ask-qns-button">
              Ask Question
            </NavLink>
          </div>
          <div className="questions-tabs">
            <ButtonGroup
              buttons={["Newest", "Top", "Views", "Oldest"]}
              selected={sortType}
              setSelected={setSortType}
            />
          </div>
          <QuestionList items={posts} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionsPage;
