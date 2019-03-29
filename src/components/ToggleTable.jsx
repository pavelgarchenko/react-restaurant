import React from "react";

const ToggleTable = props => {  
  var label = props.tableStatusData[props.selectedTable] ? "Check out" : "Check in"  
  return (
    <button 
      disabled={props.selectedTable === null}
      onClick={() => props.onToggle(props.selectedTable, props.tableData)}
    >
      {label}
    </button>
  )
};

export default ToggleTable;
