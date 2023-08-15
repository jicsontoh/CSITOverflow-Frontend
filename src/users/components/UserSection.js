import React from "react";

import AvatarCard from "../UIElements/AvatarCard";
import ContentCard from "../UIElements/ContentCard";

import "./UserSection.css";

const UserSection = ({ user }) => (
  <div className="grid">
    <AvatarCard id={user.id} gravatar={user.gravatar} views={user.views} />
    <ContentCard
      username={user.username}
      answer_count={user.answer_count}
      post_count={user.post_count}
      votes={user.votes}
      tag_count={user.tag_count}
      created_at={user.created_at}
    />
  </div>
);

export default UserSection;
