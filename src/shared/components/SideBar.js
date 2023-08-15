import React from "react";

import { ReactComponent as GlobalIcon } from "../../assets/Globe.svg";
import { ReactComponent as TagIcon } from "../../assets/Tag.svg";
import { ReactComponent as UserIcon } from "../../assets/Users.svg";
import SideBarItem from "./SideBarItem.js";

import "./SideBar.css";

const SideBarData = [
  {
    link: "/questions",
    icon: <GlobalIcon className="icon" />,
    text: "Questions",
  },
  {
    link: "/users",
    icon: <UserIcon className="icon" />,
    text: "Users",
  },
  {
    link: "/tags",
    icon: <TagIcon className="icon" />,
    text: "Tags",
  },
];

const SideBar = () => (
  <div className="side-bar-container">
    <div className="side-bar-tabs">
      <SideBarItem isHome={true} link="/" text="Home" />

      <div className="public-tabs">
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
