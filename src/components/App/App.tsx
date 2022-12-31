import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { GetIngredients } from "../GetIngredients/GetIngredients";
import { useEffect, useState } from "react";

export function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    GetIngredients()
      .then((data: any) => setData(data.data))
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <BurgerConstructor {...data} />
      <div id="portal"></div>
    </div>
  );
}

export default App;
