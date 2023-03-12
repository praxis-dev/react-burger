import { BrowserRouter as Router, Route, RouteProps } from "react-router-dom";
import { Routes } from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { fetchIngredientsThunk } from "../../services/thunk/fetchIngredientsThunk";
import { AnyAction } from "redux";
import { Login } from "../Login/Login";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { NewUser } from "../NewUser/NewUser";
import { Profile } from "../Profile/Profile";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Modal } from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import IngredientDetailsPage from "../IngredientDetailsPage/IngredientDetailsPage";
import { useSelector } from "react-redux";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredientsThunk() as unknown as AnyAction);
  });

  const modal = useSelector((state: any) => state.ingredients.modal);
  const modalType = useSelector((state: any) => state.ingredients.modalType);

  console.log(modal);
  console.log(modalType);

  return (
    <div className="App">
      <Router>
        <DndProvider backend={HTML5Backend}>
          <AppHeader />
          <Routes>
            <Route path="react-burger" element={<BurgerConstructor />}>
              {" "}
              <Route
                path="ingredients/:id"
                element={
                  modal && modalType === "ingredient" ? (
                    <Modal>
                      <IngredientDetails />
                    </Modal>
                  ) : (
                    <IngredientDetailsPage />
                  )
                }
              />
            </Route>

            <Route
              path="react-burger/login/*"
              element={<ProtectedRoute element={<Login />} />}
            />

            <Route
              path="react-burger/forgot-password/*"
              element={<ProtectedRoute element={<ForgotPassword />} />}
            />

            <Route
              path="react-burger/reset-password/*"
              element={<ProtectedRoute element={<ResetPassword />} />}
            />

            <Route
              path="react-burger/new-user/*"
              element={<ProtectedRoute element={<NewUser />} />}
            />

            <Route
              path="react-burger/profile/*"
              element={<ProtectedRoute element={<Profile />} />}
            />
          </Routes>
        </DndProvider>
      </Router>
    </div>
  );
}

export default App;
