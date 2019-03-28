import React from "react";
import TableButtonContainer from "../containers/TableButtonContainer.js";

const Tables = () => {
  var arr = [...Array(16).keys()];
  var tables = arr.map((i) => {
    return <TableButtonContainer key={i} id={i} />;
  });
  return <div className="mid-section">{tables}</div>;
};

export default Tables;
