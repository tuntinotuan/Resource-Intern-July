import React from "react";
import { useSelector } from "react-redux";
import ToggleDarkmode from "../toggle/ToggleDarkmode";

const listSidebarItem = ["Home", "Features", "News", "Others"];

const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.global);
  return (
    <div
      className={`fixed left-[10px] top-[10px] flex flex-col items-start gap-4 w-[200px] h-[90vh] bg-white dark:bg-gray-900 dark:text-white shadow-xl rounded-md p-5 transition-all z-50 ${
        showSidebar ? "" : "-translate-x-[200%]"
      }`}
    >
      {listSidebarItem && listSidebarItem.map((item) => <div>{item}</div>)}
      <ToggleDarkmode></ToggleDarkmode>
    </div>
  );
};

export default Sidebar;
