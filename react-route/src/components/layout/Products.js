import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const listNavProducts = [
  {
    title: "Search",
    url: "/products/search",
  },
  {
    title: "List",
    url: "/products/list",
  },
  {
    title: "Add",
    url: "/products/add",
  },
];

const Products = () => {
  return (
    <div>
      {listNavProducts &&
        listNavProducts.map((item) => (
          <NavLink
            to={item.url}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Products;
