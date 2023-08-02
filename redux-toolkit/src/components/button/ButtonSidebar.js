import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux-toolkit/globalSlide";

const ButtonSidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.global);

  console.log("showSidebar", showSidebar);
  const handleShowSidebar = () => {
    console.log("click");
    dispatch(toggleSidebar(!showSidebar));
  };
  return (
    <div
      className="fixed top-[10px] right-[10px] flex items-center justify-center bg-white rounded-md shadow-sm cursor-pointer p-2"
      onClick={handleShowSidebar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default ButtonSidebar;
