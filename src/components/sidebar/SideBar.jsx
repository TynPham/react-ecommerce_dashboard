import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import image from "../../constants/images";
import sidebarNav from "../../configs/sidebarNav";

function SideBar(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    console.log('e');
    const curPath = location.pathname.split('/')[1];
    const activeItem = sidebarNav.findIndex(item => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  } , [location])

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={image.logo} alt="" />
        <div className="sidebar-close">
            <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="sidebar_menu">
        {sidebarNav.map((item, index) => (
          <Link
            to={item.link}
            className={`sidebar_menu_item ${
              index === activeIndex ? "active" : ""
            }`}
            key={`nav-${index}`}
          >
            <div className="sidebar_menu_item_icon">{item.icon}</div>
            <div className="sidebar_menu_item_txt">{item.text}</div>
          </Link>
        ))}
        <div className="sidebar_menu_item">
          <div className="sidebar_menu_item_icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div className="sidebar_menu_item_txt">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
