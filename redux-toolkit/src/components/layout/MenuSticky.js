import React from "react";
import ButtonSidebar from "../button/ButtonSidebar";
import ButtonCart from "../button/ButtonCart";
import ButtonFavorites from "../button/ButtonFavorites";

const MenuSticky = () => {
  return (
    <div className="fixed top-[10px] right-[10px] flex items-center gap-4">
      <ButtonCart></ButtonCart>
      <ButtonFavorites></ButtonFavorites>
      <ButtonSidebar></ButtonSidebar>
    </div>
  );
};

export default MenuSticky;
