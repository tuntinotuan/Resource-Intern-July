import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CardCake from "../cake/CardCake";

const CartModel = () => {
  const { cakeCart } = useSelector((state) => state.cakes);
  const { showCart } = useSelector((state) => state.global);
  return (
    <Fragment>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10 bg-white p-5 z-50 rounded-md shadow-md ${
          showCart
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        } transition-all`}
      >
        {cakeCart.length > 0 &&
          cakeCart.map((items) => (
            <CardCake
              id={items.id}
              urlImg={items.urlImg}
              title={items.title}
              isFavorites={items.favorites}
              key={items.id}
            ></CardCake>
          ))}
      </div>
    </Fragment>
  );
};

export default CartModel;
