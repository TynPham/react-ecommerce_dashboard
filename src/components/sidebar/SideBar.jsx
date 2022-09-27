import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import image from "../../constants/images";
import sidebarNav from "../../configs/sidebarNav";

function SideBar(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const closeSidebar = () => {
    document.querySelector(".main_content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main_content").style = "";
    }, 500);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={image.logo} alt="" />
        <div className="sidebar-close" onClick={closeSidebar}>
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
            onClick={closeSidebar}
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
