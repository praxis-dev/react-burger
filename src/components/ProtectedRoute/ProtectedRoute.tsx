import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { getCookie } from "../../utils/cookies/getCookie";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useLocation } from "react-router-dom";

export function ProtectedRoute({ element }: { element: ReactNode }) {
  const location = useLocation();

  if (getCookie("token") === undefined) {
    if (location.pathname === "/react-burger/profile") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/login" />;
    }
  } else if (getCookie("token") !== undefined) {
    if (location.pathname === "/react-burger/login") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/" />;
    } else if (location.pathname === "/react-burger/forgot-password") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/" />;
    } else if (location.pathname === "/react-burger/new-user") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/" />;
    } else if (location.pathname === "/react-burger/new-password") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/" />;
    }
  }

  return <>{element}</>;
}
