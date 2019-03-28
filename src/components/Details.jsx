import React from "react";
import ToggleTableButtonContainer from "../containers/ToggleTableButtonContainer";
import OrderListContainer from "../containers/OrderListContainer";

const Details = props => {
  return (
    <div className="left-section">
      <h3>Table # {props.selectedTable}</h3>
      <ToggleTableButtonContainer />
      <hr/>
      <OrderListContainer />
    </div>
  );
};

export default Details;
