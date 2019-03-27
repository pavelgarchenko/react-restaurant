import React from "react";

const MenuItem = props => {
  var content = `$${props.price} ${props.name}`;
  return (
    <button className="menu-item" disabled={props.disabled}>
      {content}
    </button>
  );
};

export default MenuItem;
