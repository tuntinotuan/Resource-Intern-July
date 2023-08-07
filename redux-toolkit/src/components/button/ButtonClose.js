import React from "react";
import { IconClose } from "../icon";

const ButtonClose = ({
  onClick = () => {},
  cssPosition = "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ",
}) => {
  return (
    <div
      onClick={onClick}
      className={`${cssPosition} bg-white dark:bg-gray-800 shadow-md rounded-full p-2 cursor-pointer`}
    >
      <IconClose size={26}></IconClose>
    </div>
  );
};

export default ButtonClose;
