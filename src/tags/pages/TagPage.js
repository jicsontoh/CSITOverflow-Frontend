import React from "react";

import SideBar from "../../shared/components/SideBar";

import "./TagPage.css";

const TagPage = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="tags-page fc-black-800">
          <div className="questions-grid">
            <h3 className="headline">Tags</h3>
            <p className="fs-body">
              A tag is a keyword or label that categorizes your question with
              other, similar questions. <br />
              Using the right tags makes it easier for others to find and answer
              your question.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TagPage;
