import React from "react";

import { NUMBER_OF_TABLES } from "../../constants/constants"


const Header = props => {
  var available //= props.tableStatusData.filter(status => !status).length

  return (
    <div className="header" data-test="header">
      <h1>Restaurant Management System</h1>
      <div className="header-info">
        <h2 className="available-tables">Available Tables: <span className="number" data-test="tables-number">{available} / {NUMBER_OF_TABLES}</span></h2>
        <h2 className="money-earned">Money Earned: <span className="amount">${props.moneyEarned}</span></h2>
      </div>
    </div>
  );
};

export default Header;
