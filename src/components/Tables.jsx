import React from "react";

import { NUMBER_OF_TABLES } from "../constants/constants.js";
import TableButtonContainer from "../containers/TableButtonContainer.js";


const Tables = () => {
  var tables = [];
  for( let i = 0; i < NUMBER_OF_TABLES; i++) {
    tables.push(<TableButtonContainer key={i} id={i} />)
  }
  return <div className="mid-section">{tables}</div>;
};

export default Tables;
