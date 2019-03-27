import React from "react";

import Header from "./Header";
import DetailsContainer from "../containers/DetailsContainer.js";
import Tables from "./Tables";
import Menu from "./Menu";


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <DetailsContainer />
        <Tables />
        <Menu />
      </div>
    </div>
  ); 
};

export default App;
