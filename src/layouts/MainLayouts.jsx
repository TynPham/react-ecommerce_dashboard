import React from "react";
import "./MainLayouts.scss";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import TopNav from "../components/topnav/TopNav";

function MainLayouts(props) {
  return (
    <>
      <SideBar />
      <div className="main">
        <div className="main_content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayouts;
