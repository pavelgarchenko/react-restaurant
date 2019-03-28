import React from "react";
import ToggleTableButtonContainer from "../containers/ToggleTableButtonContainer";

const Details = (props) => {
  return (
    <div className="left-section">
      <h3>Table # {props.selectedTable}</h3>
      <ToggleTableButtonContainer />
    </div>
  );
};

export default Details;
