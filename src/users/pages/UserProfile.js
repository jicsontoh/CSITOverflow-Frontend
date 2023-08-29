import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import SideBar from "../../shared/components/SideBar";

import UserSection from "../components/UserSection";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import QuestionList from "../../questions/components/QuestionList";

import "./UserProfile.css";

const UserProfile = (props) => {
  const [loadedUser, setLoadedUser] = useState();
  const [loadedQns, setLoadedQns] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_API_URL + `/api/users/${userId}`
        );
        setLoadedUser(responseData.user);

        const data = await sendRequest(
          process.env.REACT_APP_API_URL + `/api/users/questions/${userId}`
        );
        setLoadedQns(data.qns);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedUser && (
        <div className="page">
          <SideBar />
          <div id="mainbar" className="user-main-bar pl24 pt24">
            <div className="user-card">
              <UserSection user={loadedUser} />
              <div className="activity">
                <h1 className="">Recent Activities</h1>
                <QuestionList
                  className="home-page"
                  items={loadedQns}
                  sortType="Newest"
                />
              </div>

              {/* <div className="grid--cell s-navigation mb16">
              <Link
                to="#"
                className="s-navigation--item is-selected"
                data-shortcut="P"
              >
                Profile
              </Link>
              <Link to="#" className="s-navigation--item" data-shortcut="A">
                Activity
              </Link>
            </div> */}
            </div>
            <div className="row-grid">
              {/* <ExternalUserDetails/>
          <UserActivity/> */}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserProfile;
