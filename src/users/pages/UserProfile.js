import React from "react";

import { useParams } from "react-router-dom";
import SideBar from "../../shared/components/SideBar";

import UserSection from "../components/UserSection";

import "./UserProfile.css";

import m from "../../assets/Logos/male1.png";
import f from "../../assets/Logos/female1.png";
import m2 from "../../assets/Logos/male2.png";
import f2 from "../../assets/Logos/female2.png";
import m3 from "../../assets/Logos/male3.png";

const users = [
  {
    id: "userid1",
    username: "username",
    gravatar: m,
    answer_count: 10,
    comment_count: 20,
    post_count: 4,
    votes: 10,
    created_at: "2023/08/14, 13:00",
  },
  {
    id: "userid3",
    username: "username3",
    gravatar: f,
    answer_count: 10,
    comment_count: 20,
    post_count: 6,
    votes: 11,
    created_at: "2023/07/14, 13:00",
  },
  {
    id: "userid2",
    username: "username2",
    gravatar: m2,
    answer_count: 5,
    comment_count: 10,
    post_count: 2,
    votes: 15,
    created_at: "2023/06/14, 13:00",
  },
  {
    id: "userid4",
    username: "username4",
    gravatar: f2,
    answer_count: 7,
    comment_count: 11,
    post_count: 2,
    votes: 20,
    created_at: "2023/06/14, 13:00",
  },
  {
    id: "userid5",
    username: "username5",
    gravatar: m3,
    answer_count: 8,
    comment_count: 1,
    post_count: 5,
    votes: 20,
    created_at: "2023/06/14, 13:00",
  },
];

const UserProfile = (props) => {
  const userId = useParams().userId;
  const loadedUser = users.filter((user) => user.id === userId)[0];

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default UserProfile;
