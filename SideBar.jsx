import {
  FlagOutlined,
  Group,
  LocalHospital,
  PlaylistAdd,
  StorefrontOutlined,
} from "@mui/icons-material";
import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import { useStateValue } from "./StateProvider";
function SideBar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SideBarOption src={user.photoURL} title={user.displayName} />
      <SideBarOption Icon={LocalHospital} title="COVID-19 Information Center" />
      <SideBarOption Icon={FlagOutlined} title="Pagess" />
      <SideBarOption Icon={Group} title="Friends" />
      <SideBarOption Icon={StorefrontOutlined} title="Marketplace" />
      <SideBarOption Icon={PlaylistAdd} title="Videos" />
    </div>
  );
}

export default SideBar;
