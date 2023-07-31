import React from "react";
import { NavLink } from "react-router-dom";

const listNav = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "about",
  },
  {
    title: "Product",
    url: "products/search",
  },
];

const Header = () => {
  return (
    <header>
      {listNav &&
        listNav.map((item) => (
          <NavLink
            to={item.url}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            {item.title}
          </NavLink>
        ))}
    </header>
  );
};

export default Header;
