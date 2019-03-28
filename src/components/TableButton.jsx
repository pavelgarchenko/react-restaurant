import React from "react";

const TableButton = props => {
  var style = {
    border: props.selectedTable === props.id ? "1 px solid blue" : null,
    backgroundColor: props.toggledTables.includes(props.id) ? "red" : null,
  }

  return (
    <button 
      className="single-table" 
      style={style} 
      onClick={() => props.onSelect(props.id)}
    >
     {props.id}
    </button>
  )
};

export default TableButton;
