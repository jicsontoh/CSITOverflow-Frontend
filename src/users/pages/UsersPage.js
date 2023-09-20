import React, { useState, useEffect } from "react";

import SideBar from "../../shared/components/SideBar";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import SearchBox from "../../shared/components/SearchBox";
import handleSorting from "../../shared/util/handleSorting";
import UserPanel from "../components/UserPanel";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Pagination from "../../shared/components/Pagination";

import "./UsersPage.css";

const itemsPerPage = 18;

const UsersPage = (props) => {
  const [page, setPage] = useState(1);
  const [fetchSearch, setSearch] = useState("");
  const [sortType, setSortType] = useState("Popular");

  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handlePaginationChange = (e, value) => setPage(value);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + `/api/users`
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedUsers && (
        <React.Fragment>
          <div className="page">
            <SideBar />
            <div id="mainbar" className="users-page fc-black-800">
              <h1 className="headline">Users</h1>
              <div className="headline-count">
                <span>{loadedUsers.length} users</span>
              </div>
              <div className="users-box pl16 pr16 pb16">
                <SearchBox
                  placeholder={"filter by user"}
                  handleChange={handleChange}
                  width={"200px"}
                />
                <ButtonGroup
                  buttons={["Popular", "Name", "New Users"]}
                  selected={sortType}
                  setSelected={setSortType}
                />
              </div>
              <div className="user-browser">
                <div className="grid-layout">
                  {loadedUsers
                    .filter((user) =>
                      user.username
                        .toLowerCase()
                        .includes(fetchSearch.toLowerCase())
                    )
                    .sort(handleSorting(sortType, "users"))
                    .slice(
                      (page - 1) * itemsPerPage,
                      (page - 1) * itemsPerPage + itemsPerPage
                    )
                    .map((user, index) => (
                      <UserPanel key={index} user={user} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <Pagination
            page={page}
            itemList={loadedUsers.filter((user) =>
              user.username.toLowerCase().includes(fetchSearch.toLowerCase())
            )}
            itemsPerPage={itemsPerPage}
            handlePaginationChange={handlePaginationChange}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UsersPage;
