import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../components/SideBar";
import QuestionList from "../../questions/components/QuestionList";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./HomePage.css";

// const posts = [
//   {
//     id: 1,
//     title: "qns title",
//     body: "question body",
//     username: "username",
//     gravatar: "image",
//     user_id: "userid1",
//     answer_count: 10,
//     comment_count: 20,
//     views: 27,
//     votes: 10,
//     created_at: "2023/08/14, 13:00",
//     tags: "tags",
//   },
//   {
//     id: 2,
//     title: "qns title2",
//     body: "question body222",
//     username: "username",
//     gravatar: "image",
//     user_id: "userid1",
//     answer_count: 10,
//     comment_count: 20,
//     views: 30,
//     votes: 11,
//     created_at: "2023/07/14, 13:00",
//     tags: "tags",
//   },
//   {
//     id: 3,
//     title: "qns title3",
//     body: "question body333",
//     username: "username2",
//     gravatar: "image",
//     user_id: "userid2",
//     answer_count: 5,
//     comment_count: 10,
//     views: 24,
//     votes: 15,
//     created_at: "2023/06/14, 13:00",
//     tags: "tags",
//   },
// ];

const HomePage = (props) => {
  const [loadedQns, setLoadedQns] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchQns = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + `/api/questions`
        );
        setLoadedQns(responseData.questions);
      } catch (err) {}
    };
    fetchQns();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedQns && (
        <div className="page">
          <SideBar />
          <div id="mainbar" className="homepage">
            <div className="questions-grid">
              <h3 className="questions-headline">Trending Questions</h3>
              <NavLink to="/questions/new" className="ask-qns-button">
                Ask Question
              </NavLink>
            </div>

            <QuestionList items={loadedQns} sortType="Popular" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;
