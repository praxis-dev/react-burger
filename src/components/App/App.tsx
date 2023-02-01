import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { GetIngredients } from "../GetIngredients/GetIngredients";
import { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";

import { store } from "../../services/store/Store";

import { Provider } from "react-redux";

import { ingredientsSlice } from "../../services/Slice/ingredientsSlice";

import { DndProvider } from "react-dnd";

export function App() {
  useEffect(() => {
    store.dispatch(ingredientsSlice.actions._INGREDIENTS_REQUEST);
    GetIngredients()
      .then((data: any) => {
        store.dispatch(
          ingredientsSlice.actions._INGREDIENTS_SUCCESS(data.data)
        );
      })
      .catch((error: any) => {
        store.dispatch(
          ingredientsSlice.actions._INGREDIENTS_ERROR(error.message)
        );
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
