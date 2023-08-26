import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../../shared/components/SideBar";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import QuestionList from "../components/QuestionList";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./QuestionsPage.css";

const QuestionsPage = () => {
  const [sortType, setSortType] = useState("Popular");

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
          <div id="mainbar" className="questions-page">
            <div className="questions-grid">
              <h3 className="questions-headline">All Questions</h3>
              <NavLink to="/questions/new" className="ask-qns-button">
                Ask Question
              </NavLink>
            </div>
            <div className="questions-tabs">
              <span>{loadedQns.length} questions</span>
              <ButtonGroup
                buttons={["Popular", "Newest", "Oldest"]}
                selected={sortType}
                setSelected={setSortType}
              />
            </div>
            <QuestionList items={loadedQns} sortType={sortType} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default QuestionsPage;
