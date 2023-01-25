import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { GetIngredients } from "../GetIngredients/GetIngredients";
import { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";

import { store } from "./Store";

import { Provider } from "react-redux";

import { ingredientsSlice } from "./ingredientsSlice";

import { DndProvider } from "react-dnd";

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
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <AppHeader />
          <BurgerConstructor />
        </Provider>
      </DndProvider>
    </div>
  );
}

export default App;
