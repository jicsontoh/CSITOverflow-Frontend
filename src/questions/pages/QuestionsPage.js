import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../../shared/components/SideBar";
import ButtonGroup from "../../shared/buttons/ButtonGroup";

import "./QuestionsPage.css";

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
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionsPage;
