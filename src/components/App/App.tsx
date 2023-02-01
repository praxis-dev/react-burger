import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { GetIngredients } from "../../services/api/getIngredients";
import { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";

import { store } from "../../services/store/Store";

import { Provider } from "react-redux";

import { DndProvider } from "react-dnd";

import { fetchIngredients } from "../../services/middleware/fetchIngredient";

import { AnyAction } from "redux";

export function App() {
  useEffect(() => {
    store.dispatch(fetchIngredients() as unknown as AnyAction);
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
