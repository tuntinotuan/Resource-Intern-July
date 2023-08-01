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
    <div className="page-container">
      <div className="flex items-center justify-center gap-4 w-[500px] shadow-md p-4 mx-auto">
        {listNavProducts &&
          listNavProducts.map((item) => (
            <NavLink to={item.url} className="nav-header" key={item.title}>
              {item.title}
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Products;
