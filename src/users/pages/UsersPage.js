import React, { useState, useEffect } from "react";

import SideBar from "../../shared/components/SideBar";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import SearchBox from "../../shared/components/SearchBox";
import handleSorting from "../../shared/util/handleSorting";
import UserPanel from "../components/UserPanel";

import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./UsersPage.css";

// const users = [
//   {
//     id: "userid1",
//     username: "username",
//     gravatar: m,
//     answer_count: 10,
//     comment_count: 20,
//     post_count: 4,
//     votes: 10,
//     created_at: "2023/08/14, 13:00",
//   },
//   {
//     id: "userid3",
//     username: "username3",
//     gravatar: f,
//     answer_count: 10,
//     comment_count: 20,
//     post_count: 6,
//     votes: 11,
//     created_at: "2023/07/14, 13:00",
//   },
//   {
//     id: "userid2",
//     username: "username2",
//     gravatar: m2,
//     answer_count: 5,
//     comment_count: 10,
//     post_count: 2,
//     votes: 15,
//     created_at: "2023/06/14, 13:00",
//   },
//   {
//     id: "userid4",
//     username: "username4",
//     gravatar: f2,
//     answer_count: 7,
//     comment_count: 11,
//     post_count: 2,
//     votes: 20,
//     created_at: "2023/06/14, 13:00",
//   },
//   {
//     id: "userid5",
//     username: "username5",
//     gravatar: m3,
//     answer_count: 8,
//     comment_count: 1,
//     post_count: 5,
//     votes: 20,
//     created_at: "2023/06/14, 13:00",
//   },
// ];

const itemsPerPage = 18;

const UsersPage = (props) => {
  const [page, setPage] = useState(1);
  const [fetchSearch, setSearch] = useState("");
  const [sortType, setSortType] = useState("Popular");

  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/api/users`
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
      )}
    </React.Fragment>
  );
};

export default UsersPage;
