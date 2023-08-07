import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleDarkmode from "../toggle/ToggleDarkmode";
import ButtonClose from "../button/ButtonClose";
import { toggleSidebar } from "../../redux-toolkit/globalSlide";

const listSidebarItem = ["Home", "Features", "News", "Others"];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.global);

  return (
    <div
      className={`fixed left-[10px] top-[10px] flex flex-col items-start gap-4 w-[200px] h-[90vh] bg-white dark:bg-gray-900 dark:text-white shadow-xl rounded-md p-5 transition-all z-50 ${
        showSidebar ? "" : "-translate-x-[200%]"
      }`}
    >
      <ButtonClose
        cssPosition="absolute top-1 right-1"
        onClick={() => dispatch(toggleSidebar(false))}
      ></ButtonClose>
      {listSidebarItem && listSidebarItem.map((item) => <div>{item}</div>)}
      <ToggleDarkmode></ToggleDarkmode>
    </div>
  );
};

export default Sidebar;
