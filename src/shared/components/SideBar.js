import React from "react";

import SideBarItem from "./SideBarItem.js";

import "./SideBar.css";

const SideBarData = [
  {
    link: "/questions",
    // icon: <GlobalIcon className="icon" />,
    text: "Questions",
  },
  {
    link: "/tags",
    text: "Tags",
  },
  {
    link: "/users",
    text: "Users",
  },
  {
    link: "/jobs",
    text: "Jobs",
  },
];

const SideBar = () => (
  <div className="side-bar-container">
    <div className="side-bar-tabs">
      <SideBarItem isHome={true} link="/" text="Home" />

      <div className="public-tabs">
        <p className="title fc-light">PUBLIC</p>
        {SideBarData.map(({ link, icon, text }, index) => (
          <SideBarItem key={index} link={link} icon={icon} text={text} />
        ))}
      </div>
      {/* <div className="teams-tabs">
        <p className="title fc-light">TEAMS</p>
      </div> */}
    </div>
  </div>
);

export default SideBar;
