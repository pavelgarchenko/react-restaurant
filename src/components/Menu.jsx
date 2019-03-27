import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  var arr = Array(12).fill({ name: "Avocado", price: 5 });
  var items = arr.map((item, i) => {
    return (
      <MenuItem
        key={i}
        name={item.name}
        price={item.price}
        disabled="disabled"
      />
    );
  });
  return <div className="right-section">{items}</div>;
};

export default Menu;
