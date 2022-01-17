import React from "react";
import "./Story.css";
function Story({ imgUrl, dispName, profilePic }) {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <img className="story__profilepic" src={profilePic} alt="" />
      <h4 className="story__displayName">{dispName}</h4>
    </div>
  );
}

export default Story;
