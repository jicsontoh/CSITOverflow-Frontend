import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import SideBar from "../../shared/components/SideBar";

import UserSection from "../components/UserSection";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./UserProfile.css";

const UserProfile = (props) => {
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/api/users/${userId}`
        );
        setLoadedUser(responseData.user);
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
