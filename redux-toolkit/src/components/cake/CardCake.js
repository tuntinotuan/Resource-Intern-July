import React from "react";
import { IconHeart } from "../icon";

const CardCake = ({ urlImg, title, props }) => {
  return (
    <div
      className="relative flex flex-col bg-white dark:bg-gray-800 dark:text-white rounded-md cursor-pointer group shadow-md"
      {...props}
    >
      <IconHeart
        className={`absolute top-4 right-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white`}
        size={47}
      ></IconHeart>
      <img src={urlImg} alt="" className="w-full object-cover rounded-t-md" />
      <h1>{title}</h1>
    </div>
  );
};

export default CardCake;
