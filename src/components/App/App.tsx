import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { GetIngredients } from "../GetIngredients/GetIngredients";
import { useEffect, useState } from "react";

import { store } from "./Store";

import { Provider } from "react-redux";

import { ingredientsSlice } from "./ingredientsSlice";

export function App() {
  useEffect(() => {
    GetIngredients()
      .then((data: any) => {
        store.dispatch(ingredientsSlice.actions.setIngredients(data.data));
      })
      .catch((error: any) => {
        console.log(error.name, error.message);
      });
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <AppHeader />
        <BurgerConstructor />
      </Provider>
    </div>
  );
}

export default App;
