import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { Api } from "../Api/Api";
import { useEffect, useState } from "react";

export function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    Api()
      .then((data: any) => setData(data.data))
      .catch((error: any) => {
        // fetch can return rejected Promise, maybe handle it?
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
