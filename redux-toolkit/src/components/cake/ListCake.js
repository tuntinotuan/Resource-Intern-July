import React from "react";
import CardCake from "./CardCake";
import { useSelector } from "react-redux";

const ListCake = () => {
  const { cakeList } = useSelector((state) => state.cakes);
  return (
    <div className="max-w-[1024px] mx-auto flex items-center justify-around gap-10 my-5">
      {cakeList &&
        cakeList.length > 0 &&
        cakeList.map((items) => (
          <CardCake
            id={items.id}
            urlImg={items.url}
            title={items.title}
            isFavorites={items.favorites}
            key={items.id}
          ></CardCake>
        ))}
    </div>
  );
};

export default ListCake;
