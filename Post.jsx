import { Chat, Share, ThumbUp } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({ profilePic, displayName, msg, image, timestamp }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} />
        <div className="post__info">
          <h4>{displayName}</h4>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__message">
        <p>{msg}</p>
        <img className="post__image" src={image} alt="" />
      </div>
      <div className="post__bottom">
        <div className="post__bottom__option">
          <IconButton>
            <ThumbUp />
            <p>Like</p>
          </IconButton>
        </div>
        <div className="post__bottom__option">
          <IconButton>
            <Chat />
            <p>Comment</p>
          </IconButton>
        </div>
        <div className="post__bottom__option">
          <IconButton>
            <Share />
            <p>Share</p>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
