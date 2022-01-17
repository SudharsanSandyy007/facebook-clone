import React from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import { Avatar } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStateValue } from "./StateProvider";
function NavBar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          className="navbar__left__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="navbar__search">
          <SearchIcon fontSize="large" />
          <input
            className="navbar__left__search__input"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="navbar__middle">
        <div className="navbar__middle__option navbar__middle__option--active">
          <HomeIcon />
        </div>
        <div className="navbar__middle__option">
          <FlagIcon />
        </div>
        <div className="navbar__middle__option">
          <SubscriptionsIcon />
        </div>
        <div className="navbar__middle__option">
          <StorefrontIcon />
        </div>
        <div className="navbar__middle__option">
          <PeopleIcon />
        </div>
      </div>

      <div className="navbar__right">
        <div
          className="navbar__right__option"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar src={user.photoURL} />
          <b>{user.displayName}</b>
        </div>
        <div className="navbar__right__option">
          <AddSharpIcon />
        </div>
        <div className="navbar__right__option">
          <ForumIcon />
        </div>
        <div className="navbar__right__option">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
