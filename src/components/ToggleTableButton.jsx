import React from "react";

const ToggleTableButton = props => {
  return (
    <button 
      disabled={props.selectedTable === null}
      onClick={() => props.onToggle(props.selectedTable)}
      >
      {
        props.toggledTables.includes(props.selectedTable) 
        ? "Check out"
        : "Check in"
      }
    </button>
  )
};

export default ToggleTableButton;
