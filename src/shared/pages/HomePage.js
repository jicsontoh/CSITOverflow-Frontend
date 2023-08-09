import React from "react";

import "./HomePage.css";
import SideBar from "../components/SideBar";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="homepage fc-black-800">
          <div className="questions-grid">
            <h3 className="questions-headline">Top Questions</h3>
            <div className="questions-btn">
              <button>Ask Question</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
