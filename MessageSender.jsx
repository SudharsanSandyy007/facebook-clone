import {
  Collections,
  EmojiEmotionsOutlined,
  Videocam,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
function MessageSender() {
  const [inputText, setInputText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
    setImgUrl("");
  };
  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar src={user.photoURL} />
        <form className="messagesender__inputs" action="">
          <input
            className="messagesender__top__entertext"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="messagesender__top__enterimage"
            placeholder="image URL (optional)"
          />

          <button
            onClick={handleSubmit}
            className="messagesender__button"
            type="submit"
          >
            Hidden Button
          </button>
        </form>
      </div>

      <div className="messagesender__bottom">
        <div className="messagesender__bottom__option">
          <Videocam style={{ color: "red" }} /> <p>Live Video</p>
        </div>
        <div className="messagesender__bottom__option">
          <Collections style={{ color: "green" }} /> <p> Photo/Video</p>
        </div>
        <div className="messagesender__bottom__option">
          <EmojiEmotionsOutlined style={{ color: "yellow" }} />{" "}
          <p>Feelling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
