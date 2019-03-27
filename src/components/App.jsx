import React from "react";

import Header from "./Header";
import Orders from "./Orders";
import Tables from "./Tables";
import Menu from "./Menu";


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Orders />
        <Tables />
        <Menu />
      </div>
    </div>
  ); 
};

export default App;
