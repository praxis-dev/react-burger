import React from "react";

import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerConstructor />
    </div>
  );
}

export default App;
