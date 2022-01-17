import { Avatar } from "@mui/material";
import React from "react";
import "./SideBarOption.css";

function SideBarOption({ Icon, title, src }) {
  return (
    <div className="sidebar__option">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarOption;
