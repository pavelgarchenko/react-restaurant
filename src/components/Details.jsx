import React from "react";

import ToggleTableContainer from "../containers/ToggleTableContainer";
import OrderListContainer from "../containers/OrderListContainer";


const Details = props => {
  return (
    <div className="left-section">
      <h2>Table# {props.selectedTable}</h2>
      <ToggleTableContainer />
      <OrderListContainer />
    </div>
  );
};

export default Details;
