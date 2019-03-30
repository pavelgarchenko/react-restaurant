import React from "react";

import { NUMBER_OF_TABLES } from "../constants/constants.js"


const Header = props => {
  var available = props.tableStatusData.filter(status => !status).length

  return (
    <div className="header">
      <h1>Restaurant</h1>
      <div className="header-info">
        <h2 className="available-tables">Available Tables: <span className="number">{available} / {NUMBER_OF_TABLES}</span></h2>
        <h2 className="money-earned">Money Earned: <span className="amount">${props.moneyEarned}</span></h2>
      </div>
    </div>
  );
};

export default Header;
