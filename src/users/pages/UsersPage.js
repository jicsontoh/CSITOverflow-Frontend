import React, { useState } from "react";

import SideBar from "../../shared/components/SideBar";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import SearchBox from "../../shared/components/SearchBox";

import "./UsersPage.css";

const UsersPage = (props) => {
  const [page, setPage] = useState(1);
  const [fetchSearch, setSearch] = useState("");
  const [sortType, setSortType] = useState("Popular");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <React.Fragment>
      <div className="page">
        <SideBar />
        <div id="mainbar" className="users-page fc-black-800">
          <h1 className="headline">Users</h1>
          <div className="headline-count">
            <span>3 users</span>
          </div>
          <div className="users-box pl16 pr16 pb16">
            <SearchBox
              placeholder={"filter by user"}
              handleChange={handleChange}
              width={"200px"}
            />
            <ButtonGroup
              buttons={["Popular", "Name", "Active", "New Users"]}
              selected={sortType}
              setSelected={setSortType}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersPage;
