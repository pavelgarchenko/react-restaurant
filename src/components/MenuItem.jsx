import React from "react";

const MenuItem = props => {
  return (
    <button 
      className="menu-item" 
      onClick={() => 
        props.onAdd(props.name, props.price, props.selectedTable)
      }
      disabled={
        !props.toggledTables.includes(props.selectedTable)
      }
    >
      ${props.price} {props.name}
    </button>
  );
};

export default MenuItem;
