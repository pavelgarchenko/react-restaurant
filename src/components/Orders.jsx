import React from "react";

const Orders = (props) => {
  return (
    <div className="left-section">
      <h1>
        Orders 
      </h1> 
      <h3>Table #{props.table}</h3>
    </div>
  );
};

export default Orders;
