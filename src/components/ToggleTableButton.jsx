import React from "react";

const ToggleTableButton = props => {
  var label = props.toggledTables.includes(props.selectedTable) ? "Check out" : "Check in"
  return (
    <button 
      disabled={props.selectedTable === null}
      onClick={() => props.onToggle(props.selectedTable)}
    >
      {label}
    </button>
  )
};

export default ToggleTableButton;
