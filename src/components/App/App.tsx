import { BrowserRouter as Router, Route, RouteProps } from "react-router-dom";
import { Routes } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { store } from "../../services/store/Store";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { fetchIngredientsMiddleware } from "../../services/middleware/fetchIngredientsMiddleware";
import { AnyAction } from "redux";
import { Login } from "../Login/Login";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { NewPassword } from "../NewPassword/NewPassword";
import { NewUser } from "../NewUser/NewUser";
import { Profile } from "../Profile/Profile";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

export function App() {
  useEffect(() => {
    store.dispatch(fetchIngredientsMiddleware() as unknown as AnyAction);
  }, []);

  return (
    <div className="App">
      <Router>
        <DndProvider backend={HTML5Backend}>
          <Provider store={store}>
            <AppHeader />
            <Routes>
              <Route path="react-burger" element={<BurgerConstructor />} />
              <Route path="react-burger/login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="new-password" element={<NewPassword />} />
              <Route path="new-user" element={<NewUser />} />
              {/* <Route path="profile" element={ <ProtectedRoute path="profile " } /> */}
              <Route
                path="react-burger/profile/*"
                element={<ProtectedRoute element={<Profile />} />}
              />
            </Routes>
          </Provider>
        </DndProvider>
      </Router>
    </div>
  );
}

export default App;
