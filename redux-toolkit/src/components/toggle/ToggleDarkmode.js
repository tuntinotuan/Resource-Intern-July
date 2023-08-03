import React, { useEffect } from "react";
import { IconMoon, IconSun } from "../icon";
import useDarkMode from "../../hooks/useDarkMode";
import { toggleDarkmode } from "../../redux-toolkit/globalSlide";
import { useDispatch, useSelector } from "react-redux";

const ToggleDarkmode = () => {
  const dispatch = useDispatch();
  const [darkModeHook, setDarkModeHooks] = useDarkMode();
  const { darkmode } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(toggleDarkmode(darkModeHook));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleDarkmode = () => {
    setDarkModeHooks(!darkModeHook);
    dispatch(toggleDarkmode(!darkModeHook));
  };
  return (
    <label>
      <input
        type="checkbox"
        checked={darkmode}
        onClick={handleToggleDarkmode}
        className="hidden-input"
      />
      <div
        className={`inline-block w-[70px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ${
          darkmode ? "bg-gray-800" : "bg-gray-300"
        }`}
      >
        <span
          className={`flex items-center justify-center transition-all duration-700 w-[34px] h-[34px] rounded-full ${
            darkmode ? "translate-x-[28px] bg-darkMain" : "bg-white"
          }`}
        >
          {darkmode ? <IconMoon></IconMoon> : <IconSun></IconSun>}
        </span>
      </div>
    </label>
  );
};

export default ToggleDarkmode;
