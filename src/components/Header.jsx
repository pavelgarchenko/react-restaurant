import React from "react";

const Header = props => {
  var available = props.tableStatusData.filter(status => !status).length

  return (
    <div className="header">
      <h1>Restaurant</h1>
      <h2>Available Tables: {available} / 16</h2>
      <h2>Money Earned: ${props.moneyEarned}</h2>
    </div>
  );
};

export default Header;
