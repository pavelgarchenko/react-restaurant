import React from "react";


const TableButton = props => {
  console.log(props.tableStatusData)
  var classSelected = props.selectedTable === props.id ? "selected" : "";
  var classToggled = props.tableStatusData[props.id] ? "toggled" : "";

  return (
    <button 
      className={`table-btn ${classSelected}  ${classToggled}`}
      onClick={() => props.onSelect(props.id)}
    >
     {props.id}
    </button>
  )
};

export default TableButton;
