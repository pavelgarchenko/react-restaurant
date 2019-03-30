import React from "react";


const ToggleTable = props => {  
  var label = props.tableStatusData[props.selectedTable] 
    ? "Check Out" 
    : "Check In"  
  return (
    <button 
      className="toggle-table-btn"
      disabled={props.selectedTable === null}
      onClick={() => props.onToggle(props.selectedTable, props.tableData)}
    >
      {label}
    </button>
  )
};

export default ToggleTable;
