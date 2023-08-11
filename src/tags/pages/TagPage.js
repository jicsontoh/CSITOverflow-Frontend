import React from "react";
import { NavLink } from "react-router-dom";

import SideBar from "../../shared/components/SideBar";

const TagPage = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="homepage">
          <div className="questions-grid">
            <h3 className="questions-headline">Tags</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TagPage;
