import React from "react";
import { NavLink, useLocation } from "react-router-dom";

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
  {
    title: "Relative Links",
    url: "/relative-links/123",
  },
  {
    title: "Blocking Form",
    url: "/blocking-form",
  },
];

const Header = () => {
  const matchPathProducts = useLocation().pathname.includes("products");
  return (
    <header className="sticky top-0 flex items-center justify-center gap-5 p-5 shadow-md bg-white">
      {listNav &&
        listNav.map((item) => (
          <NavLink
            to={item.url}
            className={`nav-header ${
              item.title === "Product" && matchPathProducts
                ? "text-green-500 font-bold"
                : ""
            }`}
            key={item.title}
            // preventScrollReset={true}
          >
            {item.title}
          </NavLink>
        ))}
    </header>
  );
};

export default Header;
