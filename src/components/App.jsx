import React from "react";

import Tables from "./Tables";
import Menu from "./menu";
import HeaderContainer from "../containers/HeaderContainer.js";
import DetailsContainer from "../containers/DetailsContainer.js";


const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="main-content">
        <DetailsContainer />
        <Tables />
        <Menu />
      </div>
    </div>
  ); 
};

export default App;
