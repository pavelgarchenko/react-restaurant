import React from "react";

import { MENU } from "../constants/menu";
import MenuItemContainer from "../containers/MenuItemContainer";


const Menu = () => {
  var menuItems = MENU.map(item => {
    return <MenuItemContainer name={item.name} price={item.price} />
  });

  return <div className="right-section">{menuItems}</div>;
};

export default Menu;
