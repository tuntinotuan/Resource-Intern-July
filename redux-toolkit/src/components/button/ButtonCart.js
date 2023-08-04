import React from "react";
import { IconCart } from "../icon";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux-toolkit/globalSlide";

const ButtonCart = () => {
  const dispatch = useDispatch();
  const { cakeCart } = useSelector((state) => state.cakes);
  const { showCart } = useSelector((state) => state.global);
  const cakesCount = cakeCart?.length;
  const handleShowCart = () => {
    dispatch(toggleCart(!showCart));
    console.log("click");
  };
  return (
    <div
      className="relative dark:text-white cursor-pointer"
      onClick={handleShowCart}
    >
      <IconCart size={35}></IconCart>
      <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-[#FC2872] text-white text-xs rounded-full translate-x-1/2">
        {cakesCount || 0}
      </span>
    </div>
  );
};

export default ButtonCart;
