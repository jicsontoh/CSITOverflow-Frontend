import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../components/SideBar";
import QuestionList from "../../questions/components/QuestionList";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./HomePage.css";

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
