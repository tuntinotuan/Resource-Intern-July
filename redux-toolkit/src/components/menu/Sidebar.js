import React from "react";
import { useSelector } from "react-redux";

const listSidebarItem = ["Home", "Features", "News", "Others"];

const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.global);
  return (
    <div
      className={`fixed left-[10px] top-[10px] flex flex-col items-start gap-4 w-[200px] h-[90vh] shadow-md rounded-md p-5 transition-all ${
        showSidebar ? "-translate-x-[200%]" : ""
      }`}
    >
      {listSidebarItem && listSidebarItem.map((item) => <div>{item}</div>)}
    </div>
  );
};

export default Sidebar;
