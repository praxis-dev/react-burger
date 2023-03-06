import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { getCookie } from "../../utils/cookies/getCookie";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ element }: { element: ReactNode }) {
  const location = useLocation();
  const userLocation = useSelector(
    (state: any) => state.ingredients.userLocation
  );

  if (getCookie("token") === undefined) {
    if (location.pathname === "/react-burger/profile") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/login" />;
    } else if (location.pathname === "/react-burger/forgot-password") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
    } else if (location.pathname === "/react-burger/reset-password") {
      if (userLocation !== "/react-burger/forgot-password") {
        console.log("only can be accessed from forgot password");
        return <Navigate to="/react-burger/" />;
      }
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
    } else if (location.pathname === "/react-burger/reset-password") {
      store.dispatch(
        ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
      );
      return <Navigate to="/react-burger/" />;
    }
  }

  return <>{element}</>;
}
