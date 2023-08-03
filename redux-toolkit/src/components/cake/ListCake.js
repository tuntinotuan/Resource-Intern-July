import React from "react";
import CardCake from "./CardCake";

const fakeData = [
  {
    url: "https://cdn.dribbble.com/users/2400293/screenshots/18733513/media/808ca1b009efd4781844b7e716e13edb.png?resize=768x576&vertical=center",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    url: "https://cdn.dribbble.com/users/2400293/screenshots/18034200/media/7c9ad36bd345b48cdb1a1db87ba5d096.png?resize=768x576&vertical=center",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    url: "https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png?resize=768x576&vertical=center",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const ListCake = () => {
  return (
    <div className="max-w-[1024px] mx-auto flex items-center justify-around gap-10 my-5">
      {fakeData.length > 0 &&
        fakeData.map((items) => (
          <CardCake
            urlImg={items.url}
            title={items.title}
            key={items.urlImg}
          ></CardCake>
        ))}
    </div>
  );
};

export default ListCake;
