import React from "react";
import MenuItemContainer from "../containers/MenuItemContainer";

const Menu = () => {
  // TODO: Move me to constant perhaps?
  // var menuItems = [
  //   { name: "Avocado", price: 5 },
  //   { name: "Banana", price: 2 },
  //   { name: "Water", price: 0 },
  //   { name: "Apple Juice", price: 1 },
  //   { name: "Carrot Juice", price: 2 },
  //   { name: "Durian", price: 10 },
  //   { name: "Jack Fruit", price: 4 },
  //   { name: "Raw Burritos", price: 5 },
  //   { name: "Zukini Noodle", price: 7 },
  //   { name: "Smoosy", price: 3 },
  //   { name: "Cabbage", price: 111 },
  //   { name: "Sugar Apple", price: 8 },
  // ]
  // var items = menuItems.map((item, i) => {
  //   return (
  //     <MenuItemContainer key={i} name={item.name} price={item.price} />
  //   );
  // });
    
  return (
    
    <div className="right-section">
      <MenuItemContainer name = "Avocado" price = {5} />
      <MenuItemContainer name = "Banana" price = {2} />
      <MenuItemContainer name = "Water" price = {0} />
      <MenuItemContainer name = "Apple Juice" price = {1} />
      <MenuItemContainer name = "Carrot Juice" price = {2} />
      <MenuItemContainer name = "Durian" price = {10} />
      <MenuItemContainer name = "Jack Fruit" price = {4} />
      <MenuItemContainer name = "Raw Burritos" price = {5} />
      <MenuItemContainer name = "Zukini Noodle" price = {7} />
      <MenuItemContainer name = "Smoosy" price = {3} />
      <MenuItemContainer name = "Cabbage" price = {111} />
      <MenuItemContainer name = "Sugar Apple" price = {8} />
    </div>
  );
};

export default Menu;
