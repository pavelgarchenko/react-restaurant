import React from "react";
import MenuItem from "./MenuItem";

const Menu = props => {
  var arr = Array(12).fill({ name: "Avocado", price: 5 });
  var items = arr.map((item, i) => {
    return (
      <MenuItem
        key={i}
        name={item.name}
        price={item.price}
        disabled={!props.toggledTables.includes(props.selectedTable)}
      />
    );
  });
  return <div className="right-section">{items}</div>;
};

export default Menu;
