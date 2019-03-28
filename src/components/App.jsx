import React from "react";

import Header from "./Header";
import Tables from "./Tables";
import DetailsContainer from "../containers/DetailsContainer.js";
import MenuContainer from "../containers/MenuContainer.js";


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <DetailsContainer />
        <Tables />
        <MenuContainer />
      </div>
    </div>
  ); 
};

export default App;
