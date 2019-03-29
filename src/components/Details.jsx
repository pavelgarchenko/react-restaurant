import React from "react";

import ToggleTableContainer from "../containers/ToggleTableContainer";
import OrderListContainer from "../containers/OrderListContainer";


const Details = props => {
  return (
    <div className="left-section">
      <h3>Table # {props.selectedTable}</h3>
      <ToggleTableContainer />
      <hr/>
      <OrderListContainer />
    </div>
  );
};

export default Details;
