import React, { useEffect } from "react";
import { IconHeart } from "../icon";
import { useDispatch, useSelector } from "react-redux";
import {
  addCakesToCart,
  setCakesCart,
  setFavorites,
} from "../../redux-toolkit/cakes/cakeSlice";
import useLocalStorage from "../../hooks/useLocalStorage";

const CardCake = ({ id, urlImg, title, isFavorites, props }) => {
  const { cakeCart } = useSelector((state) => state.cakes);
  const { storedValue, setValue } = useLocalStorage("cakesCart", cakeCart);
  const dispatch = useDispatch();
  const handleClickHeart = (id) => {
    dispatch(setFavorites(id));
  };
  useEffect(() => {
    dispatch(setCakesCart(storedValue));
  }, [storedValue, dispatch]);
  const addToCart = (cake) => {
    const checkCake = cakeCart.some((item) => item.id === cake.id);
    if (!checkCake) {
      dispatch(addCakesToCart(cake));
      setValue([...cakeCart, cake]);
    }
  };
  return (
    <div
      className="relative flex flex-col bg-white dark:bg-gray-800 dark:text-white rounded-md cursor-pointer group shadow-md"
      {...props}
    >
      <IconHeart
        className={`absolute top-4 right-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700 z-40 drop-shadow-md ${
          isFavorites ? "text-[#F4448F]" : "text-white"
        }`}
        size={47}
        onClick={() => handleClickHeart(id)}
      ></IconHeart>
      <div className="relative">
        <img src={urlImg} alt="" className="w-full object-cover rounded-t-md" />
        <button
          onClick={() => addToCart({ id, urlImg, title, isFavorites })}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-darkMain bg-white shadow-md rounded-md p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible active:bg-pink-500 transition-all duration-700"
        >
          Add to card
        </button>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default CardCake;
