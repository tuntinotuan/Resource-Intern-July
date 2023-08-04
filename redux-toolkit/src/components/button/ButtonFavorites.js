import React from "react";
import { IconHeart } from "../icon";
import { useSelector } from "react-redux";

const ButtonFavorites = () => {
  const { cakeList } = useSelector((state) => state.cakes);
  const favoritesCount = cakeList.filter(
    (item) => item.favorites === true
  )?.length;
  return (
    <div className="relative dark:text-white">
      <IconHeart size={35}></IconHeart>
      <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-[#FC2872] text-white text-xs rounded-full translate-x-1/2">
        {favoritesCount || 0}
      </span>
    </div>
  );
};

export default ButtonFavorites;
