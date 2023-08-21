import React from "react";

import AvatarCard from "../UIElements/AvatarCard";
import ContentCard from "../UIElements/ContentCard";

import "./UserSection.css";

const UserSection = ({ user }) => {
  return (
    <React.Fragment>
      <div className="grid">
        <AvatarCard id={user.id} gravatar={user.gravatar} />
        <ContentCard
          username={user.username}
          answer_count={user.answers.length}
          post_count={user.questions.length}
          votes={0}
          tag_count={0}
          created_at={user.created_at}
        />
      </div>
    </React.Fragment>
  );
};

export default UserSection;
