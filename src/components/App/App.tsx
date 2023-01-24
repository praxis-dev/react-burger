import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { GetIngredients } from "../GetIngredients/GetIngredients";
import { useEffect, useState } from "react";

import { IngredientsContext } from "../../services/context";

export const IngredientsContextProvider = IngredientsContext.Provider;

export function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    GetIngredients()
      .then((data: any) => setData(data.data))
      .catch((error: any) => {
        console.log(error.name, error.message);
      });
  }, []);

  return (
    <div className="App">
      <IngredientsContextProvider value={data}>
        <AppHeader />
        <BurgerConstructor />
      </IngredientsContextProvider>
    </div>
  );
}

export default App;
