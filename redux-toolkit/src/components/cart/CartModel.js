import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../../redux-toolkit/globalSlide";
import { setCakesCart } from "../../redux-toolkit/cakes/cakeSlice";
import useLocalStorage from "../../hooks/useLocalStorage";
import ButtonClose from "../button/ButtonClose";

const CartModel = () => {
  const dispatch = useDispatch();
  const { cakeCart } = useSelector((state) => state.cakes);
  const { showCart } = useSelector((state) => state.global);
  const { setValue } = useLocalStorage("cakesCart", cakeCart);
  const handleRemoveCake = (cake) => {
    const newCartList = cakeCart.filter((item) => item.id !== cake.id);
    dispatch(setCakesCart(newCartList));
    setValue(newCartList);
  };
  return (
    <Fragment>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-start gap-10 min-w-[600px] min-h-[280px] bg-white dark:bg-gray-800 dark:text-white p-5 z-50 rounded-xl shadow-md ${
          showCart
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50 -translate-y-full"
        } transition-all`}
      >
        <ButtonClose
          onClick={() => dispatch(toggleShowCart(!showCart))}
        ></ButtonClose>
        {cakeCart.length > 0 ? (
          <div className="flex flex-col gap-2 w-full">
            {cakeCart.map((items) => (
              <CardItemLocal
                data={items}
                onClick={() => handleRemoveCake(items)}
                key={items.id}
              ></CardItemLocal>
            ))}
          </div>
        ) : (
          <div className="text-pink-500 font-bold flex items-center justify-center w-full h-full">
            Cart Empty
          </div>
        )}
      </div>
    </Fragment>
  );
};

function CardItemLocal({ data, onClick = () => {} }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={data.urlImg}
          alt=""
          className="w-[100px] object-cover rounded-md"
        />
        <h1 className="truncate max-w-[200px]">{data.title}</h1>
      </div>
      <button
        className="text-white bg-pink-500 rounded-md p-3"
        onClick={onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default CartModel;
