import React from "react";
import TableButtonContainer from "../containers/TableButtonContainer.js";

// import TableButton from "./TableButton";

const Tables = props => {
  var arr = Array(16).fill(0);
  var tables = arr.map((data, i) => {
    return <TableButtonContainer key={i} id={i} />;
  });
  return <div className="mid-section">{tables}</div>;
};

export default Tables;
