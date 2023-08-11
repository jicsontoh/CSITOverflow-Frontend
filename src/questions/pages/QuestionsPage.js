import React from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../../shared/components/SideBar";

const QuestionsPage = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="homepage">
          <div className="questions-grid">
            <h3 className="questions-headline">All Questions</h3>
            <NavLink to="/questions/new" className="ask-qns-button">
              Ask Question
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionsPage;
