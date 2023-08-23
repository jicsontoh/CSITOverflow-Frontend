import React from "react";
import { Link } from "react-router-dom";
import AvatarImage from "./GetAvatar";

import "./AvatarCard.css";

const AvatarCard = ({ id, gravatar, views }) => (
  <div className="img-card">
    <div className="avatar-card">
      <div className="avatar">
        <Link className="avatar-link" to={`/users/${id}`}>
          <div className="logo-wrapper">
            <AvatarImage gravatar={gravatar} />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default AvatarCard;
