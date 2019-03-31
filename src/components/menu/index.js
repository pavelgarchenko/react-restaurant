import React from "react";

import { MENU } from "../../constants/menu";
import MenuItemContainer from "../../containers/MenuItemContainer";


const Menu = () => {
  var menuItems = MENU.map((item, i)=> {
    return <MenuItemContainer key={i} name={item.name} price={item.price} />
  });

  return <div className="right-section" data-test="menu-wrapper">{menuItems}</div>;
};

export default Menu;
