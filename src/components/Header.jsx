import React from "react";

import { NUMBER_OF_TABLES } from "../constants/constants.js"


const Header = props => {
  var available = props.tableStatusData.filter(status => !status).length

  return (
    <div className="header">
      <h1>Restaurant</h1>
      <h2>Available Tables: {available} / {NUMBER_OF_TABLES}</h2>
      <h2>Money Earned: ${props.moneyEarned}</h2>
    </div>
  );
};

export default Header;
