import React from "react";

import SideBar from "../../shared/components/SideBar";

const UsersPage = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="homepage">
          <div className="questions-grid">
            <h3 className="questions-headline">Users</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersPage;
