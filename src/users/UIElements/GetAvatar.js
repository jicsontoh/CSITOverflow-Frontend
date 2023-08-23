import React from "react";

import M1 from "../../assets/Avatars/male1.png";
import M2 from "../../assets/Avatars/male2.png";
import M3 from "../../assets/Avatars/male3.png";
import M4 from "../../assets/Avatars/male4.png";
import F1 from "../../assets/Avatars/female1.png";
import F2 from "../../assets/Avatars/female2.png";
import F3 from "../../assets/Avatars/female3.png";
import F4 from "../../assets/Avatars/female4.png";

const AvatarImage = ({ gravatar }) => {
  const getImage = (avatar) => {
    switch (avatar) {
      case "M1":
        return M1;
      case "M2":
        return M2;
      case "M3":
        return M3;
      case "M4":
        return M4;
      case "F1":
        return F1;
      case "F2":
        return F2;
      case "F3":
        return F3;
      case "F4":
        return F4;
      default:
        return M1;
    }
  };

  return <img src={getImage(gravatar)} alt={gravatar} />;
};

export default AvatarImage;
