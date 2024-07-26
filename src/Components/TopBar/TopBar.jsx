import React from "react";
import Search from "./Search";
import menu from "../../Image/Icons/ic_burgermenu.svg";
import Bell from "../../Image/Icons/ic_round-notifications.svg";
import arrow from "../../Image/Icons/arrowdown.svg";
import Profile from "../../Image/Profile2x.png";
import BellActive from "../../Image/Icons/ic_round-notifications-active.svg";
import Chat from "../../Image/Icons/ic_support.svg";

function TopBar() {
  return (
    <div className="outer w-full">
      <div className="inner flex justify-between py-6 px-[50px]">
        <div className="search-menu flex">
          <img src={menu} alt="" className="pr-4" />
          <Search />
        </div>
        <div className="rightsec flex items-center gap-[30px]">
          <img src={Bell} alt="" className="h-6 w-6" />
          <img src={Chat} alt="" className="h-6 w-6" />
          <div className="profile-sec flex">
            <img src={Profile} alt=""  className="w-9 h-auto"/>
            <img src={arrow} alt=""  className="w-6 ml-2"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
