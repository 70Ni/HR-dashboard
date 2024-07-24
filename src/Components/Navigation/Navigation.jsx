import React from "react";
import Dashboard from "../../Image/Icons/ic_dashboard.svg";
import calendar from "../../Image/Icons/ic_calendar.svg";
import logo from "../../Image/Icons/logo.svg";
import NavigationSection from "./NavigationSection";

const NavData = [
  {
    NavIcon: Dashboard,
    Navname: "Dashboard",
    NavLink: "/dashboard",
  },
  {
    NavIcon: calendar,
    Navname: "Recruitment",
    NavLink: "/recruitment",
  },
  {
    NavIcon: calendar,
    Navname: "Schedule",
    NavLink: "/schedule",
  },
  {
    NavIcon: calendar,
    Navname: "Employee",
    NavLink: "/employee",
  },
  {
    NavIcon: calendar,
    Navname: "Department",
    NavLink: "/department",
  },
  ///other menu starts here
  {
    NavIcon: calendar,
    Navname: "Support",
    NavLink: "/support",
  },
  {
    NavIcon: calendar,
    Navname: "Settings",
    NavLink: "/settings",
  },
];

const mainMenuSize = 5;
const otherSize = 2;

let fe =  "border-r my-5"



function Navigation() {
  return (
    <div className="Navigation-outer border-r my-5">
      <div className="inner flex flex-col items-start  bg-NavShade">
        <div className="logo mx-[20px]">
          <img src={logo} alt="" />
        </div>
        <div className="menu-category-wrapper">
          <NavigationSection
            Category={"MAIN MENU"}
            menuItems={NavData}
            start={0}
            stop={mainMenuSize}
          />
          <NavigationSection
            Category={"OTHERS"}
            menuItems={NavData}
            start={mainMenuSize}
            stop={otherSize + mainMenuSize}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
