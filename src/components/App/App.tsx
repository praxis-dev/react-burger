import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
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
      <Router>
        <DndProvider backend={HTML5Backend}>
          <Provider store={store}>
            <AppHeader />
            <Routes>
              <Route path="react-burger/" element={<BurgerConstructor />} />
            </Routes>
          </Provider>
        </DndProvider>
      </Router>
    </div>
  );
}

export default App;
