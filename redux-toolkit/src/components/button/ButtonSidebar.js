import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux-toolkit/globalSlide";
import { IconMenu } from "../icon";

const ButtonSidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.global);
  const handleShowSidebar = () => {
    dispatch(toggleSidebar(!showSidebar));
  };
  return (
    <div
      className="fixed top-[10px] right-[10px] flex items-center justify-center bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-sm cursor-pointer p-2"
      onClick={handleShowSidebar}
    >
      <IconMenu></IconMenu>
    </div>
  );
};

export default ButtonSidebar;
